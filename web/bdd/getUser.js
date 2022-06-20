import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function main() {
  await prisma.user.create({
    data: {
      name: 'Jane',
      email: 'jane@doe.com',
      profile: {
        create: { bio: 'I like turtles, and my name is Jane Doe' },
      },
    },
  })

  // const allUsers = await prisma.user.findMany()
  // return(allUsers)
}