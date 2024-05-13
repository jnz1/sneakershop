import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.upsert({
        where: {
            email: 'felipe.lima@alpar.com.br'
        },
        create: {
            name: 'Felipe Lima',
            email: 'felipe.lima@alpar.com.br',
            password: '123123123',
            admin: true,
        },
        update: {}
    })

    await prisma.product.upsert({
        where: { id: 1, },
        update: {},
        create: {
            name: 'Enxada',
            description: 'Uma enxada bonita.',
            price: 100,
            imageUrl: 'https://cdn.b4c.inf.br/storage/ferramac/1000/enxada-larga-goivada-25-lbs-com-cabo-de-madeira-145-cm-tramontina-pro1696691474090680-2.jpeg'
        }
    })
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit()
})