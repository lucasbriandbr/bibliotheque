export default function psswdIsValid(password){if(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(password)===true){return(true)}else{return(false)}}