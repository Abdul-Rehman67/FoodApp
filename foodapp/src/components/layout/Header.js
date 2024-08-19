import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="" className="text-primary font-semibold text-2xl">
        ST PIZZA
      </Link>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold ">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>Contact</Link>
        <Link
          href={""}
          className="bg-primary px-8 py-2 rounded-full text-white"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
