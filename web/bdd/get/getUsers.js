import connectBdd from "../connecteur"

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

export default async function getUsers() {
    const prisma = connectBdd()
    return prisma.user.findMany({
        select: {
            name: true,
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