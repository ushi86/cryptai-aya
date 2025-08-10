import { PrismaClient } from '@/prisma/generated/prisma';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
export const client = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = client;
