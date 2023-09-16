import Script from 'next/script';
import HeaderGeneric from "@/src/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Footer from "@/src/components/common/footer";


const Register = () => {
    return (
        <>
          <Head>
            <title>Onebitflix - Registro</title>
            <link rel="shortcut icon" href="/favico.svg" type="image/x-icon"/>
          </Head>
          <Script src="https://jsuites.net/v4/jsuites.js" />
          <main className={styles.main}>
            <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login"/>
            <Container className="py-5">
              <p className={styles.formTitle}><strong>Bem-vindo(a) ao OneBitFlix!</strong></p>
              <Form className={styles.form}>
                <p className='text-center'><strong>Faça a sua conta!</strong></p>
                <FormGroup>
                <Label for="firstName" className={styles.label}>NOME</Label>
                <Input
                 id="firstName"
                 name="firstName"
                 type="text"
                 placeholder="Qual o seu nome?"
                 required
                 maxLength={20}
                 className={styles.inputName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName" className={styles.label}>SOBRENOME</Label>
                <Input
                 id="lastName"
                 name="lastName"
                 type="text"
                 placeholder="Qual o seu sobrenome?"
                 required
                 maxLength={20}
                 className={styles.inputName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone" className={styles.label}>WHATSAPP / TELEGRAM</Label>
                <Input
                 id="phone"
                 name="phone"
                 type="tel"
                 placeholder="(xx) 9xxxx-xxxx"
                 data-mask="[-]+55 (00) 00000-0000"
                 required
                 maxLength={20}
                 className={styles.inputName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email" className={styles.label}>E-MAIL</Label>
                <Input
                 id="email"
                 name="email"
                 type="text"
                 placeholder="Digite o seu email"
                 required
                 maxLength={20}
                 className={styles.inputName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="birth" className={styles.label}>DATA DE NASCIMENTO</Label>
                <Input
                 id="birth"
                 name="birth"
                 type="date"
                 min="1930-01-01"
                 max="2020-12-31"
                 required
                 maxLength={20}
                 className={styles.inputName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password" className={styles.label}>SENHA</Label>
                <Input
                 id="password"
                 name="password"
                 type="password"
                 placeholder="Digite a sua senha (Min:6 | Max:20)"
                 required
                 minLength={6}
                 maxLength={20}
                 className={styles.inputName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword" className={styles.label}>CONFIRME SUA SENHA</Label>
                <Input
                 id="confirmPassword"
                 name="confirmPassword"
                 type="password"
                 placeholder="Confirme a sua senha"
                 required
                 maxLength={20}
                 className={styles.inputName}
                />
              </FormGroup>
              <Button type="submit" outline className={styles.formBtn}>
                CADASTRAR
              </Button>
              </Form>
            </Container>
            <Footer/>
          </main>
        </>
    )
}

export default Register;