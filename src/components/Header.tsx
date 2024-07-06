import Link from "next/link";
import HeaderUser from "./HeaderUser";

export default async function Header() {
  return (
    <header className="flex gap-2 items-center justify-between max-w-[1200px] m-auto w-full p-4">
      <Link href="/">
        <h1 className="text-2xl font-semibold">Myntenance</h1>
      </Link>
      <HeaderUser />
    </header>
  );
}
