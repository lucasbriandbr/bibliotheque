import { PrismaClient } from '@prisma/client'

export default function connectBdd() {
  const prisma = new PrismaClient()
  return prisma
}


// import { PrismaClient } from '@prisma/client'

// declare global {
//   // allow global `var` declarations
//   // eslint-disable-next-line no-var
//   var prisma: PrismaClient | undefined
// }

// export const prisma =
//   global.prisma ||
//   new PrismaClient({
//     log: ['query'],
//   })

// if (process.env.NODE_ENV !== 'production') global.prisma = prisma