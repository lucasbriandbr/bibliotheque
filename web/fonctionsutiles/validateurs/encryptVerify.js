// const bcrypt = require('bcrypt');
// const saltRounds = 10;

export async function encrypt(password) {
    // const encryptedPwd = await bcrypt.hash(password, saltRounds)
    let encryptedPwd = password
    return encryptedPwd
}

export async function compare(password, databasePassword) {
    const comparedPwd = await bcrypt.compare(password, databasePassword)
    return comparedPwd
}