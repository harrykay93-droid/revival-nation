export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-red-600">
          Revival Nation
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#" className="hover:text-red-500">Home</a>
          <a href="#" className="hover:text-red-500">About</a>
          <a href="#" className="hover:text-red-500">Speakers</a>
          <a href="#" className="hover:text-red-500">Register</a>
          <a href="#" className="hover:text-red-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}