export const runtime = 'edge'

export default async function Info() {
    const response = await fetch('https://gorest.co.in/public/v2/users')
    const users = await response.json()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>cloudflare-nextjs-example ~ info</h1>
            <p>{JSON.stringify(users)}</p>
        </main>
    )
}
