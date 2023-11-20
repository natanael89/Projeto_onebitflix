import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { User } from "../models";
import bcrypt from "bcrypt";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { ADMINJS_COOKIE_PASSWORD } from "../config/environment";
import session from "express-session"
import connectSession from "connect-session-sequelize"


const SequelizeStore = connectSession(session.Store)
const store = new SequelizeStore({db: sequelize})
store.sync()

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    resources: adminJsResources,
    rootPath: '/admin',
    branding: {
        companyName: 'OneBitFlix',
        favicon: '/favicon.svg',
        logo: '/onebitflix.svg',
        theme: {
          colors: {
              primary100: '#ff0043',
              primary80: '#ff1a57',
              primary60: '#ff3369',
              primary40: '#ff4d7c',
              primary20: '#ff668f',
              grey100: '#151515',
              grey80: '#333333',
              grey60: '#4d4d4d',
              grey40: '#666666',
              grey20: '#dddddd',
              filterBg: '#333333',
              accent: '#151515',
              hoverBg: '#151515',
          }
        }
    },
    locale: locale,
    dashboard: dashboardOptions
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs,{
    authenticate: async (email, password) => {
        const user = await User.findOne({where: {email}})
  
        if (user && user.role === 'admin') {
          const matched = await bcrypt.compare(password, user.password)
  
          if (matched) {
              return user
          }
        }
  
        return false
     },
     cookiePassword: ADMINJS_COOKIE_PASSWORD
},null, {
    resave: false,
    saveUninitialized: false,
    store: store,
    secret: ADMINJS_COOKIE_PASSWORD
})