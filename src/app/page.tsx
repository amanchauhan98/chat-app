import '@radix-ui/themes/styles.css';
import {Flex, Strong } from "@radix-ui/themes";
import {PrismaClient} from '@prisma/client';

export default function Home() {

  const prisma = new PrismaClient();

  const user = prisma.users.findMany();

  const userName = prisma.users.findFirst({
    where : {
      email : "amanchauhan@gmail.com"
    },
  })

  user.then((data)=> console.log("herodata",data[0]?.firstName))

  userName?.then((data)=> console.log("username", data?.lastName))

  // for creating the user entry
  const addUser = prisma.users.create({
    data : {
      email : "amanchauhan123@gmail.com",
      firstName : "amanchauhan",
      lastName : "chauhan",
      createDate : new Date(),
      updateDate : new Date()
    }
  })

  addUser.then((res)=> console.log("user created", res))

  return (
    <>
    <div>
      <Flex className="h-[100vh] w-full flex justify-center items-center">
        <Strong className="text-center w-full">Init the Radix UI</Strong>
      </Flex>
    </div>
    </>
  );
}
