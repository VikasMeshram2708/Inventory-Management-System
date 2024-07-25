import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 border-b">
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold">
          <Link href="/">Inventory Management System</Link>
        </h1>
      </div>
    </nav>
  );
}
