import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className=" h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Dashboard
      </div>
      <nav className="flex-1 p-6 space-y-4">
        <Link href="/" className="block px-4 py-2 rounded hover:bg-gray-700">
          Home
        </Link>
        <Link
          href="/profile"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          profile
        </Link>
        <Link
          href="/setting"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          setting
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
