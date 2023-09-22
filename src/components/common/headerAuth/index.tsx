import Link from "next/link";
import { Container, Form, Input } from "reactstrap";
import Modal from "react-modal";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

Modal.setAppElement("#__next");

const HeaderAuth = () => {
    const router = useRouter();

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleLogout = () => {
        sessionStorage.clear();

        router.push("/")
    }


    return (
        <>
            <Container className={styles.nav}>
            <Link href="/home">
                 <picture>
                    <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav}/>
                 </picture>
            </Link>
            <div className="d-flex align-items-center">
                <Form>
                    <Input
                      name="search"
                      type="search"
                      placeholder="Pesquisar"
                      className={styles.input}
                    />
                </Form>
                <picture>
                    <img src="/homeAuth/iconSearch.svg" alt="lupaHeader" className={styles.searchImg}/>
                   
                </picture>
                <p className={styles.userProfile} onClick={handleOpenModal}>AB</p>

               
            </div>
            <Modal 
            isOpen={modalOpen} 
            onRequestClose={handleCloseModal} 
            shouldCloseOnEsc={true}
            className={styles.modal} 
            overlayClassName={styles.overlayModal}
            >
                <Link href="/profile">
                  <p className={styles.modalLink}>Meus Dados</p>    
                </Link>   
                <p className={styles.modalLink} onClick={handleLogout}>Sair</p>
            </Modal>
           </Container>
        </>
    )
};

export default HeaderAuth;