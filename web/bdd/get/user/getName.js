import connectBdd from "../../connecteur"

export async function getName(keyword){
    const prisma = connectBdd()
    const user = await prisma.user.findMany({
        where: {
            name : {
                startsWith: keyword,
                mode: 'insensitive'
            }
        },
        select: {
            name: true,
            User_A: {
                select: {
                    name: true,
                }
            },
            lib: true,
        },
        orderBy: {
            id: 'asc',
        }
    })
    prisma.$disconnect()

    return user ?? false
}