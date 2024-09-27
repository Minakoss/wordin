export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/typewriter-pattern.png')", // Βάλε το pattern από την εικόνα
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navbar */}
      <nav className="bg-white bg-opacity-80 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-2xl font-serif font-bold">Wordin</div>
          <div>
            <a href="#" className="text-gray-700 hover:text-black mx-4">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-black mx-4">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-black mx-4">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black mx-4">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-32 bg-white bg-opacity-70">
        <h1 className="text-4xl text-black font-serif font-bold">WordΙn</h1>
        <p className="mt-4 text-xl text-gray-700">
          Ανακαλύψτε τη δουλειά και τα projects που αναλαμβάνω ως αρθρογράφος.
        </p>
        <a
          href="#projects"
          className="mt-6 bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800"
        >
          Δείτε τα Projects
        </a>
      </header>
    </div>
  );
}
