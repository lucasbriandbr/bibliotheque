import { prisma } from "../connecteur"

export async function getUserInfos(email){
    const prisma = connectBdd()
    const user = await prisma.user.findFirst({
        where: {
            email : {
                equals: email,
                mode: 'insensitive'
            }
        }
    })
    prisma.$disconnect()

    return user ?? false
}

export function updateUserInfos(id,password) {
    const prisma = connectBdd()
    return prisma.user.update({
        where: {
            id
        },
        data: {
            password
        }
    })
    .then(() => true)
    .catch(() => false)
    .finally(() => prisma.$disconnect())
    
}

export default async function getUsers(number) {
    const prisma = connectBdd()
    return prisma.user.findMany({
        select: {
            email: true,
            name: true,
            role: true,
        },
        orderBy: {
            id: 'asc'
        }
    })
    .then((users) => users)
    .catch(() => false)
    .finally(() => prisma.$disconnect())
}

export function updateUser(id, datas) {
    const prisma = connectBdd()
    return prisma.user.update({
        where: {
            id:id
        },
        data:{...datas}
    })
    .then(() => true)
    .catch((err) => console.log(err))
    .finally(() => prisma.$disconnect())
}