import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between">
      
      <nav className="flex items-center gap-5 text-gray-500 font-semibold ">
      <Link href="/" className="text-primary font-semibold text-2xl">
        ST PIZZA
      </Link>
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>Contact</Link>
      </nav>

      <nav className="flex items-center text-gray-400 gap-4 font-semibold">
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className="bg-primary px-8 py-2 rounded-full text-white"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
