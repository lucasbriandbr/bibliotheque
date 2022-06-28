import { PrismaClient } from '@prisma/client'

export default function connectBdd() {
  const prisma = new PrismaClient()
  return prisma
}