import { auth } from '@/auth'
import StartupForm from '@/components/StartupForm'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page() {
    const session = await auth();
    if(!session) redirect("/");
    return (
        <>
            <section className='slate-container !min-h-[230px]'>
                <h1 className='heading'>Submit Your StartUp</h1>
            </section>
            <StartupForm />
        </>
    )
}

