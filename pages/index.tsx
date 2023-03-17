import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if(!session){
    return{
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <h1 className="text-lg text-green-500">welcome</h1>
      <p className="text-white">login as : {user?.name}</p>
      <button onClick={() => signOut()} className="h-10 w-24 bg-slate-600">logout</button>
    </>
  )
}
