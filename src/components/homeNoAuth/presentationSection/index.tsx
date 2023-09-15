import { Button, Col, Container, Row} from "reactstrap";
import Link from "next/link";
import styles from "./styles.module.scss";
import  AOS  from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const  PresentationSection = () => {
    useEffect(()=>{
        AOS.init();
    }, []);


    return (
        <>
            <Container className="py-4">
                <Row>
                    <Col md className="d-flex flex-column justify-content-center align-items-start">
                        <p className={styles.subTitle}>ACESSO ILIMITADO</p>
                        <p className={styles.title}>Tenha acesso aos melhores tutoriais de Programação.</p>
                        <p className={styles.description}>Estude de onde estiver a qualquer momento e continue evoluindo como programador.</p>
                        <Link href="/register" className={styles.link}>
                            <div>
                                <Button outline className={styles.btnCta}>ACESSE AGORA 
                                 <picture>
                                <img src="/buttonPlay.svg" alt="buttonImg" className={styles.btnImg}/>
                            </picture>
                            </Button>
                            </div>
                            
                        </Link>
                    </Col>
                    <Col>
                       <picture>
                             <img src="/homeNoAuth/homeNoAuth/imgPresentation.png" alt="imgIndex" className={styles.imgPresentation}/>
                       </picture>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center pt-5">
                            <picture>
                              <img src="/homeNoAuth/homeNoAuth/iconArrowDown.svg" alt="arrowDown" className={styles.arrowDown} />
                            </picture>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PresentationSection;