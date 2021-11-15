import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="max-w-2xl mx-auto text-left text-6xl font-bold tracking-tight md:tracking-tighter leading-tight mb-12 mt-8">
      <Link href="/">
        <a className="hover:underline">🎒 Bag of tricks</a>
      </Link>
    </h2>
  )
}

export default Header
