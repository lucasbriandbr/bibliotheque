import psswdIsValid from "../validateurs/psswdIsValid"
import emailIsValid from "../validateurs/emailIsValid"
import styles from "../../styles/Error.module.css"
import { postRequest } from "../../bdd/backEnd"

export default function inscription(email,password,passwordConfirm,name){
    if(emailIsValid(email)===false){return(<p className={styles.errorInvalid}>Votre email n'est pas valide.</p>)}else{
        if(psswdIsValid(password)===false){return(<p className={styles.errorInvalid}>Votre mot de passe ne correespond pas au format requis.</p>)}else{
            if (password!==passwordConfirm) {return(<p className={styles.errorInvalid}>Les mots de passe ne correspondent pas.</p>)}else{
                return postRequest('v2/post/addUser', {email,password,name})
            }
        }
    }
}