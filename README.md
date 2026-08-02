🏛️ Ingarq
Plataforma web full stack para la gestión de proyectos de arquitectura. Permite administrar clientes y obras de manera centralizada, con una interfaz moderna e intuitiva.

✨ Características
Gestión de clientes: registro y administración de clientes del estudio
Seguimiento de obras: control del estado y avance de proyectos
Interfaz de usuario moderna construida con React
Backend REST API con Node.js y Express
Persistencia con MongoDB

🔧 Autenticación de usuarios en desarrollo.

🛠 Stack
Capa	Tecnología
Frontend	React + JavaScript + Vite
Backend	Node.js + Express
Base de datos	MongoDB + Mongoose
Variables de entorno	dotenv

⚙️ Instalación y uso
1. Clonar el repositorio
bash
git clone https://github.com/Gaston-Reynoso/ingarq.git
cd ingarq
2. Configurar el backend
bash
cd backend
npm install

Crear .env en /backend:

env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/ingarq
bash
npm run dev
3. Configurar el frontend
bash
cd ../frontend
npm install

Crear .env en /frontend:

env
VITE_API_URL=http://localhost:4000/api
bash
npm run dev

La app estará disponible en http://localhost:5173

🔌 Endpoints principales
Clientes
Método	Endpoint	Descripción
GET	/api/clientes	Listar todos los clientes
GET	/api/clientes/:id	Obtener cliente por ID
POST	/api/clientes	Crear cliente
PUT	/api/clientes/:id	Actualizar cliente
DELETE	/api/clientes/:id	Eliminar cliente
Obras
Método	Endpoint	Descripción
GET	/api/obras	Listar todas las obras
GET	/api/obras/:id	Obtener obra por ID
POST	/api/obras	Crear obra
PUT	/api/obras/:id	Actualizar obra
DELETE	/api/obras/:id	Eliminar obra
🗺️ Roadmap
 Autenticación de usuarios (JWT)
 Roles: admin / cliente
 Carga de imágenes de obras
 Deploy en producción
👤 Autor

Gastón Jeremías Reynoso GitHub · LinkedIn
