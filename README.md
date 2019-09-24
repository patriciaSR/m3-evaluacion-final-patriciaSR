# m3-Evaluación Final - Directorio de Rick y Morty.

![Ricky y Morty Logo](./src/images/rick-logo.png)

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty,
que podemos filtrar por el nombre del personaje.

Este proyecto utiliza React y se ha implementado con [Create React App](https://github.com/facebook/create-react-app).

## 1. Listado de personajes
En primer lugar, tenemos una web con el listado de personajes de Rick and Morty. Para
eso, utilizamos el servicio de [https://rickandmortyapi.com](https://rickandmortyapi.com/documentation/characters) que nos devuelve información sobre los primeros 20 personajes de la serie.

## 2. Filtrado de personajes
Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder
buscarlos por nombre. Para eso, tenemos un buscador en la parte superior de la Home. Este buscador tiene en cuenta si las letras están en mayúscula/minúscula para la búsqueda, y devuelve un mensaje de Not-Found si la búsqueda no da ningún resultado.

## 3. Componentes del listado de personajes
Esta app tiene esta estructura de componentes:
```
-Home:
  -Filters
  -CharacterList
    -CharacterCard
-CharacterDetail
-Header
-Footer
-Loading
```

## 4. Detalle de personajes
Al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usamos rutas y React router. En la pantalla de detalle aparece además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

## 5. BONUS: Mejoras visuales
* Se muestra la especie y si un personajes está muerto con un icono
* Se usa un sistema de grid para pintar el listado de personaje que funciona responsive en dispositivos pequeños
## 6. BONUS: URL compartible
La URL del detalle de personaje es compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.

## 7. BONUS: Loading and Not-Found Message
Se han creado componentes para el cargado de los personajes y para cuando la busqueda no tiene resultados o el personaje que buscamos por url no se encuentra en nuestro directorio.

