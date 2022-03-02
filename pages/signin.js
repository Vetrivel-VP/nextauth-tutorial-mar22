import React from 'react'
import { getProviders, getSession, signIn } from 'next-auth/react'

export default function SignIn({ providers }) {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <img
        className="h-full w-full object-cover"
        src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_960_720.jpg"
        alt=""
      />
      <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.7)]">
        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="rounded-md border  bg-[rgba(0,0,0,0.4)] px-4 py-2"
          >
            <button
              onClick={() => signIn(provider.id)}
              className="font-semibold text-white"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req, res } = context
  const providers = await getProviders()

  const session = await getSession({ req })

  if (session && res) {
    res.statusCode = 302
    res.setHeader('Location', '/')
    return {
      props: {
        session,
        providers,
      },
    }
  }

  return {
    props: {
      providers,
    },
  }
}
