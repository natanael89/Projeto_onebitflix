import HeaderGeneric from "@/src/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";

const Register = () => {
    return (
        <>
          <Head>
            <title>Onebitflix - Registro</title>
            <link rel="shortcut icon" href="/favico.svg" type="image/x-icon"/>
          </Head>
          <main>
            <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login"/>
          </main>
        </>
    )
}

export default Register;