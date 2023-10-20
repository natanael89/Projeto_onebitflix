import styles from "../styles/profile.module.scss";
import UserForm from "@/src/components/profile/user";
import HeaderAuth from "@/src/components/common/headerAuth";
import Footer from "@/src/components/common/footer";
import { Button, Col, Container, Row } from "reactstrap";
import { useState } from "react";
import PasswordForm from "@/src/components/profile/password";
import Head from "next/head";


const UserInfo = () => {
    const [form, setForm] = useState("userForm");

    return (
        <>
           <Head>
           <title>Onebitflix - Meus dados</title>
           <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
           </Head>
           <main className={styles.main}>
            <div className={styles.header}>
                <HeaderAuth/>
            </div>
            <Container className={styles.gridContainer}>
                <p className={styles.title}>Minha Conta</p>
                <Row className="pt-3 pb-5">
                    <Col md={4} className={styles.btnColum}>
                        <Button 
                        outline 
                        className={styles.renderFormBtn}
                        style={{color: form === "userForm" ? "#FF0044" : 'white'}} 
                        onClick={()=>{setForm("userForm")}}>
                            DADOS PESSOAIS
                        </Button>
                        <Button 
                        outline 
                        className={styles.renderFormBtn}
                        style={{color: form === "passwordForm" ? "#FF0044" : 'white'}} 
                        onClick={()=>{setForm("passwordForm")}}>
                            SENHA
                        </Button>
                    </Col>
                    <Col md>
                        {form === "userForm" ? <UserForm/> : <PasswordForm/>}
                    </Col>
                </Row>
            </Container>
            <div className={styles.footer}>
                <Footer/>
            </div>
            
           </main>
        </>
    );
};

export default UserInfo;