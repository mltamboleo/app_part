 PRESENTACIÓN
-----------------------

Componente VUE alimentado por datos mockeados en JSON que muestra información sobre una pieza
manufacturada (características, controles y medidas) junto con sus grados de calidad.

Cada 10 segundos se simula un refresco de los datos que serían recibidos desde BACKEND mediante una
modificación aleatoria del JSON. La reactividad de VUE permite que este refresco se haga sin tener
que recargar la página.

-----------------------
 INSTALACIÓN Y USO
-----------------------

Este componente puede utilizarse en un HTML siguiendo estos pasos:

1) Colocar la carpeta "part" en la raíz que contenga el HTML 

2) Añadir en el ```<header>``` del HTML el motor principal de VUE y los estilos de la app:

```<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.js"></script>``` <br>
```<link href="part/app.css" rel="stylesheet">```

*Opcionalmente se ha añadido también la fuente 'Roboto' de Google Fonts

3) Añadir antes de la etiqueta de cierre ```</body>``` el motor JS de la app (incluye todos los componentes utilizados):

```<script src="part/app.js"></script>```

4) Copiar y pegar el ```<div id="app">``` en la página HTML

-----------------------
 NOTAS ADICIONALES
-----------------------

Para el layout se ha utilizado tecnología FLEXBOX y GRID.

Para los estilos se ha seguido la metodología BEM (http://getbem.com/).

En la parte inferior de cada 'feature' faltaría implementar un menú con más opciones sobre el
elemento (falta especificación desde requerimientos).

Para presentar los controles según los requerimientos (esto es, manteniendo un flow de izquierda a
derecha por bloques de información), después de leer los datos del JSON, estos se reagrupan de 4 en 4 
dentro de un ```<div>```.
