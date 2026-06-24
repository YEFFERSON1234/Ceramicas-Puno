import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 1. Convertimos la función a un Componente Asíncrono (async)
// Esto permite que el servidor espere la respuesta de la base de datos antes de pintar la web.
export default async function Home() {
  
  // 2. Realizamos la consulta a tu tabla en Brasil
  // Solicitamos todas las columnas ('*') de la tabla 'productos'.
  const { data: productos, error } = await supabase
    .from("productos")
    .select("*");

  // Si hay algún problema de conexión, lo registramos de forma segura en la consola del servidor
  if (error) {
    console.error("Error al conectar con Supabase:", error.message);
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      
      {/* Tu cabecera aislada */}
      <Header />

      <main className="flex-grow max-w-6xl mx-auto w-full p-6">
        <section className="bg-gray-100 rounded-lg p-10 text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-4">Arte en Cerámica</h1>
          <p className="text-lg text-gray-600 mb-6">Textos persuasivos aquí. Encuentra los mejores diseños para tu hogar.</p>
          
          {/* 3. Inyectamos de forma segura el dato dinámico usando llaves {} */}
          <div className="bg-emerald-100 text-emerald-800 p-4 rounded-md mb-6 inline-block font-bold border border-emerald-300 shadow-sm">
            Conexión Exitosa: {productos?.[0]?.nombre || "Buscando productos..."}
          </div>

          <br />
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-md font-bold hover:bg-emerald-700 transition">
            Llamada a la acción (Ver catálogo)
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center font-medium text-gray-500">
            [Imagen complementaria 1]
          </div>
          <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center font-medium text-gray-500">
            [Imagen complementaria 2]
          </div>
        </section>
      </main>

      {/* Tu pie de página aislado */}
      <Footer />

    </div>
  );
}