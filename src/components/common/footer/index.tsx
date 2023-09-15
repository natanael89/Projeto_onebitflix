import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <>
           <Container className={styles.footer}>
              <picture>
                <img src="/logoOnebitcode.svg" alt="logoFooter" className={styles.footerLogo}/>
              </picture>
              <a href="http://onebitcode.com" target={"blank"} className={styles.footerLink}>ONEBITCODE.COM</a>
           </Container>
        </>
    );
};

export default Footer;