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
            User_B: {
                select: {
                    name: true,
                    lib: true,
                    User_A:  {
                        select: {
                            name: true,
                        }
                    },
                }
            },
            User_A: {
                select: {
                    name: true,
                    lib: true,
                    User_A: {
                        select: {
                            name: true,
                        }
                    },
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