# AB POS Solution - Landing Page & Tech Demo

Bienvenido al repositorio de la demostración técnica de **AB POS Solution**. Este proyecto sirve como la Landing Page principal y una prueba de concepto arquitectónica que justifica nuestra transición hacia una solución de software como servicio (SaaS) Fintech y plataforma Core de Marca Blanca (White-label).

## 🚀 Visión del Proyecto

El objetivo de esta base de código es establecer los cimientos de desarrollo de la empresa, solventando la deuda técnica previa y el desorden visual mediante:
- **Desarrollo Impecable:** Código fuertemente tipado con TypeScript.
- **Arquitectura Limpia (Clean Architecture):** Separación estricta de responsabilidades entre la capa de presentación, lógica de dominio y acceso a datos.
- **Sistema de Diseño Premium:** Uso de Material UI (MUI v5) personalizado para ofrecer una interfaz dinámica, limpia y con alto impacto visual.
- **Marca Blanca:** Arquitectura agnóstica de estilos para permitir el "theming" dinámico según los requerimientos de futuros clientes B2B.

## 🛠️ Stack Tecnológico

- **Core:** React 18, TypeScript
- **Bundler:** Vite
- **UI Framework:** Material UI (MUI v5)
- **Icons:** Material UI Icons
- **Typography:** Poppins (Google Fonts)
- **Routing:** React Router v6

## 📦 Estructura del Proyecto (Clean Architecture)

Nuestro diseño modular se divide en las siguientes capas dentro de `src/`:

- `core/`: Lógica de negocio pura (Entidades, Modelos, Casos de Uso).
- `data/`: Implementación de repositorios e infraestructura (APIs, configuración Axios).
- `presentation/`: Capa de UI exclusiva.
  - `components/`: Componentes modulares y reutilizables.
  - `pages/`: Vistas completas de la Landing Page.
  - `theme/`: Configuración del sistema de diseño (MUI Theme).
- `shared/`: Utilidades comunes y constantes.

## 💻 Entorno de Desarrollo Local

### Prerrequisitos
- Node.js (v18 o superior recomendado)
- npm o yarn

### Pasos para ejecutar

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-organizacion/ab-pos-solution-demo.git
   cd ab-pos-solution-demo
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo Vite:
   ```bash
   npm run dev
   ```

4. Abrir la URL indicada en la terminal (por defecto `http://localhost:5173`) para ver la aplicación.
