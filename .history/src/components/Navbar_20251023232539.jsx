export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
      <div className="container flex justify-between items-center py-4">
        <a href="#home" className="font-bold text-xl text-blue-600">Joseph Mbugua</a>
        <div className="space-x-6 hidden md:flex">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
