import Link from 'next/link'



export default function Home() {
  return (
    <div className="container">

      <h1>HOME PAGE </h1>

      <Link href="/articles" ><a>articles </a></Link>


    </div>
  )
}
