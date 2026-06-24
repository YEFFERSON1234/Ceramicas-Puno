export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Datos de Contacto</h3>
          <p>Tel: 2222-145637</p>
          <p>Email: info@ceramicas.com</p>
          <div className="flex space-x-4 mt-4">
             <span>[FB]</span> <span>[WA]</span> <span>[IG]</span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Formulario</h3>
          <p className="text-sm text-gray-400">Aquí conectaremos Supabase pronto...</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Ubicación</h3>
          <div className="bg-gray-600 h-32 w-full flex items-center justify-center rounded">
            [Mapa de Google]
          </div>
        </div>
      </div>
    </footer>
  );
}