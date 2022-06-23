import connectBdd from "../connecteur"

export default async function postUsers(number) {
    const prisma = connectBdd()
    return prisma.user.create({
        email: "lucasbriandbr@gmail.com",
        name: "Lucas Briand",
        password: "LucasB34@",
        role: "ADMIN",
    })
    .then((users) => users)
    .catch(() => false)
    .finally(() => prisma.$disconnect())
}