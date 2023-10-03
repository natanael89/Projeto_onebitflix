import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/src/components/profile/user";
import HeaderAuth from "@/src/components/common/headerAuth";
import Footer from "@/src/components/common/footer";
import { Button, Col, Container, Row } from "reactstrap";


const UserInfo = () => {
    return (
        <>
           <title>Onebitflix - Meus dados</title>
           <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
           <main>
            <div className={styles.header}>
                <HeaderAuth/>
            </div>
            <Container className="py-5">
                <p className={styles.title}>Minha Conta</p>
                <Row className="pt-3 pb-5">
                    <Col md={4} className={styles.btnColum}>
                        <Button outline className={styles.renderFormBtn}>
                            DADOS PESSOAIS
                        </Button>
                            <Button outline className={styles.renderFormBtn}>
                            SENHA
                        </Button>
                    </Col>
                    <Col md>
                    <UserForm/>
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