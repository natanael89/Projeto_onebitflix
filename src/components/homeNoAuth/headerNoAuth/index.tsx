import {Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const HeaderNoAuth = () => {
    return (
    <>
       <div className={styles.ctaSection}>
        <picture>
            <img src="/homeNoAuth/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
        </picture>
        <p>Se cadastre para ter acesso aos cursos</p>
        <picture>
            <img src="/homeNoAuth/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
        </picture>
       </div>
       <Container className={styles.nav}>
        <picture>
            <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav}/>
        </picture>
        <div>
            <Link href="/login">
            <Button className={styles.navBtn}  outline>Entrar</Button>
            </Link>
            <Link href="/register">
            <Button className={styles.navBtn}  outline>Quero fazer parte</Button>
            </Link>
            
        </div>
       </Container>
    
    </>);
};

export default HeaderNoAuth;