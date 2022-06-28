import connectBdd from "../connecteur"
// import { encrypt } from "../../fonctionsutiles/validateurs/encryptVerify"

export default async function insertUser(messagerie,motdepasse,nom) {
    const prisma = connectBdd()
    // const passwordEncrypted = await encrypt(password)
    return await prisma.user.create({
        data:{
            email : messagerie,
            password : motdepasse,
            name : nom,
        }
    })
    .finally(() => prisma.$disconnect())
}