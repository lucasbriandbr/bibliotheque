const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
    
async function main() {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    
    // await prisma.user.create({
    //     data: {
    //     name: 'Jane',
    //     email: 'janedoe@gmail.com',
    //     profile: {
    //         create: { bio: 'I like turtles, and my name is Jane Doe' },
    //     },
    //     },
    // })
    
    // await prisma.user.create({
    //     data: {
    //     name: 'Reader',
    //     email: 'reader@alexandria.com',
    //     profile: {
    //         create: { bio: "I'm just a basic reader, i can read and write coms." },
    //     },
    //     },
    // })
    
    // await prisma.user.create({
    //     data: {
    //     name: 'Author',
    //     email: 'author@alexandria.com',
    //     profile: {
    //         create: { bio: "I'm a basic reader too, i can just write books too haha." },
    //     },
    //     role: 'AUTHOR',
    //     },
    // })
    
    // await prisma.user.create({
    //     data: {
    //     name: 'Editor',
    //     email: 'editor@alexandria.com',
    //     profile: {
    //         create: { bio: "I'm the boss, the entrepreneur, i own a f*cking editor's house bro. Do not talk with me baby." },
    //     },
    //     role: 'EDITOR',
    //     },
    // })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
