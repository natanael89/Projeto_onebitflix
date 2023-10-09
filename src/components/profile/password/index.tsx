import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";


const PasswordForm = () => {
    return (
        <>
           <Form className={styles.form}>
               <div className={styles.inputNormalDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="currentPassword">
                            SENHA ATUAL
                        </Label>
                        <Input
                         name="currentPassword"
                         type="password"
                         id="currentPassword"
                         placeholder="******"
                         required
                         minLength={6}
                         maxLength={12}
                         className={styles.input}
                        />
                    </FormGroup>
               </div>
               <div className={styles.inputFlexDiv}>
                <FormGroup>
                    <Label for="newPassword" className={styles.label}>
                        NOVA SENHA
                    </Label>
                    <Input
                     name="newPassword"
                     type="password"
                     id="newPassword"
                     placeholder="******"
                     required
                     minLength={6}
                     maxLength={12}
                     className={styles.inputFlex}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="confirmaNewPassword" className={styles.label}>
                        CONFIRMAR NOVA SENHA
                    </Label>
                    <Input
                     name="confirmaNewPassword"
                     type="password"
                     id="confirmaNewPassword"
                     placeholder="******"
                     required
                     minLength={6}
                     maxLength={12}
                     className={styles.inputFlex}
                    />
                </FormGroup>

                <Button className={styles.formBtn} outline>
                    Salvar Alterações
                </Button>
               </div>
           </Form>
        </>
    );
};

export default PasswordForm;