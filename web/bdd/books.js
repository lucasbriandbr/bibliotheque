import connectBdd from "./connecteur"

export default async function getBooks(number) {
    const prisma = connectBdd()
    return prisma.book.findMany({
        select: {
            title: true,
        },
        orderBy: {
            id: 'asc'
        }
    })
    .then((books) => books)
    .catch(() => false)
    .finally(() => prisma.$disconnect())
}