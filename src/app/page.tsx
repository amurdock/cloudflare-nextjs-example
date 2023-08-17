import Link from 'next/link'

export const runtime = 'edge'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>cloudflare-nextjs-example</h1>
      <Link href="/info">Info</Link>
    </main>
  )
}
