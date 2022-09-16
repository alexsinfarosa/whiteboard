import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  // await prisma.note.create({
  //   data: {
  //     title: "My first note",
  //     body: "Hello, world!",
  //     userId: user.id,
  //   },
  // });

  // await prisma.note.create({
  //   data: {
  //     title: "My second note",
  //     body: "Hello, world!",
  //     userId: user.id,
  //   },
  // });

  const data = Array.from({ length: 10 }).map(() => ({
    title: faker.lorem.words(3),
    body: faker.lorem.paragraphs(3),
    userId: user.id,
  }));

  let inserts = [];
  for (const d of data) {
    inserts.push(prisma.note.create({ data: d }));
  }
  await prisma.$transaction(inserts);

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
