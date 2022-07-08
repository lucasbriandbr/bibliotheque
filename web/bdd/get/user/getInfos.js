import connectBdd from "../../connecteur"

export async function getInfos(name){
    const prisma = connectBdd()
    const user = await prisma.user.findFirst({
        where: {
            name : {
                equals: name,
                mode: 'insensitive'
            }
        },
        select: {
            bio: true,
        },
        orderBy: {
            id: 'asc',
        }
    })
    prisma.$disconnect()

    return user ?? false
}