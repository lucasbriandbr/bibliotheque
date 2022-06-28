import connectBdd from "../connecteur"
// import { encrypt } from "../../fonctionsutiles/validateurs/encryptVerify"

export async function insertUser(email,password,name) {
    const prisma = connectBdd()
    // const passwordEncrypted = await encrypt(password)
    return prisma.user.create({
        data:{
            email: email,
            password: password,
            name: name
        }
    })
    .finally(() => prisma.$disconnect())
}