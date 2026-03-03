"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="text-xl font-bold">
        <Link href="/">Nextjs</Link>
      </div>
      <div className="flex space-x-6">
        <Link
          href="/"
          className={`${pathname === "/" ? "bg-slate-600 text-white" : "bg-red-900 text-white"}`}
        >
          Home
        </Link>
        <Link href="/posts" className="bg-red-900 text-white">
          Posts
        </Link>
        <Link href="/products" className="bg-red-900 text-white">
          products
        </Link>
        <Link href="/about" className="bg-red-900 text-white">
          About
        </Link>
        <Link href="/contact" className="bg-red-900 text-white">
          Contact
        </Link>
        <Link href="/login" className="bg-red-900 text-white">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
