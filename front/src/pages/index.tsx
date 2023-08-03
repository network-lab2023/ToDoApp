import Head from 'next/head'
import { useEffect, useState } from 'react'

type Data = {
    message: string;
}

export default function Home() {
    const [data, setData] = useState<Data|null>(null)

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/sample")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    if (!data) return (<>Loading...</>)

    return (
        <>
            <Head>
                <title>To Do App</title>
            </Head>
            <div>
                <h1>To Do App</h1>
                <p key={data.message}>{data.message}</p>
            </div>
        </>
    )
}