import psswdIsValid from "./psswdIsValid"
import emailIsValid from "./emailIsValid"
import styles from "../styles/Error.module.css"

export default function inscription(email,password,passwordConfirm){
    if(emailIsValid(email)===false){return(<p className={styles.errorInvalid}>Votre email n'est pas valide.</p>)}else{
        if(psswdIsValid(password)===false){return(<p className={styles.errorInvalid}>Votre mot de passe ne correespond pas au format requis.</p>)}else{
            if (password!==passwordConfirm) {return(<p className={styles.errorInvalid}>Les mots de passe ne correspondent pas.</p>)}else{
                return(<p className={styles.errorValid}>Toutes vos informations sont au bon format.</p>)
            }
        }
    }
}