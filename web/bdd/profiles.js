import connectBdd from "./connecteur"

export default async function getProfiles(number) {
    const prisma = connectBdd()
    return prisma.profile.findMany({
        select: {
            bio: true,
            // user: true,
            userId: true,
            // creationDate: true,
        },
        orderBy: {
            id: 'asc'
        }
    })
    .then((profiles) => profiles)
    .catch(() => false)
    .finally(() => prisma.$disconnect())
}