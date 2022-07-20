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
            name: true,
            bio: true,
            website: true,
            age: true,
            language: true,
            created_at: true,
            posts: true,
            friendof: {
                select: {
                    name: true,
                    lib: true,
                    friendof:  {
                        select: {
                            name: true,
                        }
                    },
                }
            },
            friends: {
                select: {
                    name: true,
                    lib: true,
                    friendof: {
                        select: {
                            name: true,
                        }
                    },
                }
            },
        },
        orderBy: {
            id: 'asc',
        }
    })
    prisma.$disconnect()

    return user ?? false
}