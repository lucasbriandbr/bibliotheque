import connectBdd from "../connecteur"

export default async function getPosts(number) {
    const prisma = connectBdd()
    return prisma.post.findMany({
        select: {
            title: true,
            content: true,
        },
        orderBy: {
            id: 'asc'
        }
    })
    .then((posts) => posts)
    .catch(() => false)
    .finally(() => prisma.$disconnect())
}