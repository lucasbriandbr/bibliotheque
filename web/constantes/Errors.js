//  Import des styles

import styles from "../styles/Error.module.css"

export default function getError(error) {
    switch (error) {
        case 'P2002_email':
            return(<p className={styles.errorInvalid}>{'This email address is already associated with an account'}</p>)
        case 'P2002_name':
            return(<p className={styles.errorInvalid}>{'This name is already associated with an account'}</p>)
        default:
            return(<p className={styles.errorInvalid}>{'An undefined error has occured. Please contact us to find a solution to your problem.'}</p>)
    }
}