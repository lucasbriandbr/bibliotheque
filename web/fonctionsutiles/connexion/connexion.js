import psswdIsValid from "../validateurs/psswdIsValid"
import emailIsValid from "../validateurs/emailIsValid"
import styles from "../../styles/Error.module.css"

export default function inscription(email, password){
    if(emailIsValid(email)===false){return(<p className={styles.errorInvalid}>Votre email n'est pas valide.</p>)}else{
        if(psswdIsValid(password)===false){return(<p className={styles.errorInvalid}>Votre mot de passe ne correespond pas au format requis.</p>)}else{
            return(<p className={styles.errorValid}>Toutes vos informations sont au bon format.</p>)
        }
    }
}