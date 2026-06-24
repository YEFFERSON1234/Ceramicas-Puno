//Importa de supabase la parte de createClient para poder crear un cliente de supabase
import { createClient } from "@supabase/supabase-js";
//@/ -- atajo de carpetas
//@ -- Pertenece ala organizacion oficial de supabase, tambien puede aver similares, como @types, @testing-library, @mui, etc
//constructor de supabase, se le pasa la url y la key de supabase que se encuentran en el archivo .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// export para que las demas partes de la aplicacion puedan usar el cliente de supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
// crea un objeto de supabase de createclient, con todas las funciones de supabase, como auth, storage, etc, Todo ese kit de herramientas queda guardado dentro de tu variable