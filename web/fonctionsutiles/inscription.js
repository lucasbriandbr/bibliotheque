import psswdIsValid from "./psswdIsValid"
import emailIsValid from "./emailIsValid"

export default function inscription(email,password,passwordConfirm){
    if(emailIsValid(email)===false){return(<p className={`text-xs w-full text-red-600 font-medium mt-1`}>Votre email n'est pas valide.</p>)}else{
        if(psswdIsValid(password)===false){return(<p className={`text-xs w-full text-red-600 font-medium mt-1`}>Votre mot de passe ne correespond pas au format requis.</p>)}else{
            if (password!==passwordConfirm) {return(<p className={`text-xs w-full text-red-600 font-medium mt-1`}>Les mots de passe ne correspondent pas.</p>)}else{
                return(<p className={`text-xs w-full text-green-600 font-medium mt-1`}>Toutes vos informations sont au bon format.</p>)
            }
        }
    }
}