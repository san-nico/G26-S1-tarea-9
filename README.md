# Taller Frontend 2026

Sitio web informativo para el **Taller Frontend 2026**, desarrollado con React y Vite. La pagina presenta la informacion principal del curso, su stack tecnologico, los pilares del taller y el equipo de relatores.

## Demo

Proyecto preparado para publicarse en GitHub Pages:

```txt
https://san-nico.github.io/G26-S1-tarea-9/
```

## Caracteristicas

- Landing page responsive para presentar el taller.
- Navegacion interna hacia las secciones principales.
- Hero principal con llamada a la accion.
- Seccion de informacion clave del curso.
- Carrusel automatico para el stack tecnologico.
- Cards de relatores con informacion profesional y enlaces de contacto.
- Contenido centralizado en un archivo JSON para facilitar ediciones.
- Estilos construidos con Emotion y un tema compartido.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Emotion
- Styled Components
- ESLint
- GitHub Pages

## Requisitos

Antes de ejecutar el proyecto necesitas tener instalado:

- Node.js
- npm

## Instalacion

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/san-nico/G26-S1-tarea-9.git
cd G26-S1-tarea-9
npm install
```

## Uso local

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Luego abre la URL que muestra Vite en la terminal, normalmente:

```txt
http://localhost:5173/
```

## Scripts disponibles

```bash
npm run dev
```

Ejecuta la aplicacion en modo desarrollo.

```bash
npm run build
```

Genera la version de produccion en la carpeta `dist`.

```bash
npm run preview
```

Permite revisar localmente la version generada por `build`.

```bash
npm run lint
```

Ejecuta ESLint para revisar el codigo.

```bash
npm run deploy
```

Publica la carpeta `dist` en GitHub Pages usando `gh-pages`.

## Edicion de contenido

La mayor parte del contenido editable esta en:

```txt
src/data/contenido.json
```

Desde ese archivo se pueden modificar:

- Textos de navegacion.
- Titulos de secciones.
- Informacion del hero.
- Cards de pilares.
- Tecnologias del stack.
- Datos, biografias y enlaces de relatores.
- Informacion del footer.

Las imagenes usadas por las cards se encuentran principalmente en:

```txt
public/img/
```

## Despliegue en GitHub Pages

El proyecto ya incluye la configuracion `base` de Vite para el repositorio:

```js
base: "/G26-S1-tarea-9/";
```

Para publicar una nueva version:

```bash
npm run build
npm run deploy
```

## Demo

[G26-S1-tarea-9](https://san-nico.github.io/G26-S1-tarea-9)

## Autor

Proyecto desarrollado como parte de la tarea 9 del grupo G26.
