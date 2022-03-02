import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { signIn, signOut, useSession, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const index = () => {
  const { data: session } = useSession()
  const router = useRouter()
  console.log(session)

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-50">
      <div
        className="flex h-auto w-64 cursor-pointer items-center justify-center rounded-md border border-gray-300 px-4 py-2"
        onClick={() => router.push('/signin')}
      >
        {!session ? (
          <div className="flex items-center justify-center">
            <FcGoogle fontSize={30} className="mr-2" />
            <span>Sign in with Google</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img
              src={session.user.image}
              className="h-20 w-20 rounded-lg shadow-lg"
              alt=""
              onClick={signOut}
            />

            <p>{session.user.name}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default index

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
