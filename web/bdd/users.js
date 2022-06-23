import connectBdd from "./connecteur"

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