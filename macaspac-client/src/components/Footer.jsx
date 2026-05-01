import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="border-t-2 border-zinc-900 bg-zinc-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-zinc-50 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold">BulldogEx Shop</p>
          <p className="mt-1 text-sm text-zinc-300">Campus essentials, simple ordering.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
          <Link to="/" className="transition hover:text-zinc-100">Home</Link>
          <Link to="/about" className="transition hover:text-zinc-100">About</Link>
          <Link to="/products" className="transition hover:text-zinc-100">Products</Link>
          <Link to="/auth/signin" className="transition hover:text-zinc-100">Sign In</Link>
          <Link to="/auth/signup" className="transition hover:text-zinc-100">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
