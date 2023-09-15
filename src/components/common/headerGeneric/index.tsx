import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

interface props {
    logoUrl: string;
    btnUrl: string;
    btnContent: string;
}

const HeaderGeneric = ({logoUrl, btnUrl, btnContent} : props) => {
    return (
        <>
          <div className={styles.header}>
            <Container className={styles.headerContainer}>
                <Link href={logoUrl}>
                 <picture>
                    <img src="/logoOnebitflix.svg" alt="logoRegister" className={styles.headerLogo}/>
                </picture>
                </Link>
               <Link href={btnUrl}>
                <Button outline color="light" className={styles.headerBtn}>{btnContent}</Button>
               </Link>
               
            </Container>
          </div>
        </>
    )
}

export default HeaderGeneric;