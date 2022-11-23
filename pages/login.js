import React from "react";
import {signIn, useSession} from 'next-auth/react'
import {useRouter} from 'next/router'

function LoginPage() {
    const {data: session, status} = useSession()
    const router = useRouter()
    if (status !== 'loading' && status === 'authenticated') {
        router.push('/')
    }
    return (
        <div>
            <div>
                <button onClick={() => signIn('github')}>
                    Iniciar Sesion en GitHub
                </button>
            </div>
        </div>
    )
}

export default LoginPage