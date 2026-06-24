export default function Header() {
  return (
    <header className="bg-emerald-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">LOGO Cerámicas</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-emerald-200">Inicio</a>
          <a href="#" className="hover:text-emerald-200">Catálogo</a>
          <a href="#" className="hover:text-emerald-200">Nosotros</a>
          <a href="#" className="hover:text-emerald-200">Contacto</a>
        </nav>
      </div>
    </header>
  );
}