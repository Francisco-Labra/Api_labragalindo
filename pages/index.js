import React from "react";
import {useSession, signOut} from 'next-auth/react'
import {useRouter} from 'next/router'
 
function Homepage() {

  const {data: session, status} = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <p>Loading ...</p>
  }

  
  if (status === 'unauthenticated') {
    router.push('/login')
  }

  return (
    <div>
      {
        session ? (
          <div>
          <h1>{session.user.name}</h1>
          <p>{session.user.email}</p>
          <img src={session.user.image} alt=''/>
          <p>Labra Galindo Francisco</p>
          </div>
        ) : (
          <p>Skeleton</p>
        )
      }
      <button onClick={()=> signOut()}>       
        Cerrar Sesion
      </button>
    </div>
  )
}

export default Homepage
