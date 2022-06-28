import psswdIsValid from "../validateurs/psswdIsValid"
import emailIsValid from "../validateurs/emailIsValid"
import styles from "../../styles/Error.module.css"

export default function inscriptionErrors(email,password,passwordConfirm){
    if(emailIsValid(email)===false){return(<p className={styles.errorInvalid}>Votre email n'est pas valide.</p>)}else{
        if(psswdIsValid(password)===false){return(<p className={styles.errorInvalid}>Votre mot de passe ne correespond pas au format requis.</p>)}else{
            if (password!==passwordConfirm) {return(<p className={styles.errorInvalid}>Les mots de passe ne correspondent pas.</p>)}else{
                return('')
            }
        }
    }
}