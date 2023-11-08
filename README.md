# Sukha Store

[![Video de muestra](https://i.imgur.com/9nXKhye.png)](https://youtu.be/jgpk20HIUoQ)
### [Video demostración](https://www.youtube.com/watch?v=HlgbEvLDAmo)
## Que es Sukha Store?

Sukha es una tienda online realizada para el proyecto final del curso de ReactJS dictado por coder house.

En este curso, que es el tercer nivel de la carrera de programación, aprenderás a programar por componentes, mediante Javascript, JS, ES6, y también conocerás las ventajas de la utilización del flujos de datos. Asimismo, aplicarás el manejo de rutas utilizando Firebase, y comprenderás la utilización del virtual DOM mediante los desarrollos de React JS. Al finalizar, podrás crear tus propias aplicaciones SPA, y estarás en condiciones de hacer cualquier desarrollo con uno de los frameworks más populares y avanzados del momento.

## Que se utiliza en la página?

En la página podemos encontrar implementacion de:

- JSX & transpiling
- Componentes
- Promises, asincronía y MAP
- Routing y Navegación
- Eventos
- Context
- Técnicas de rendering
- Firebase

## Iniciar el proyecto

Para iniciar el proyecto clona el repositorio, asegúrate de tener [node instalado](https://nodejs.org/es/download/) y abre la terminal con **Ctrl + ñ** y corre el comando `npm install` instalarás las dependencias.
Procede a abrir en proyecto en tu editor de texto de confianza
En este caso se usó firebase, deberás crear un proyecto de firebase, luego para conectar al servidor deberás ir a la configuración de tu proyecto, crear tu archivo .env y con el siguiente formato completar los datos obtenidos en [tu aplicación de firebase](https://firebase.google.com/docs/web/learn-more?authuser=2&hl=es#config-object)

#### Formato del archivo '.env'    
    REACT_APP_apiKey=...
    REACT_APP_authDomain=...
    REACT_APP_projectId=...
    REACT_APP_storageBucket=...
    REACT_APP_messagingSenderId...
    REACT_APP_appId=...
![env](https://i.imgur.com/nXxbuL1.png)
Completando con tus credenciales de firebase.
Dentro de tu aplicación de firebase dirígete a Firestore Database y crea una colección llamada 'items'.

#### Ejemplo de un 'item' dentro de 'items' 

    categoryId: "consolas"
    
    description: "La consola Nintendo Switch está diseñada para cualquier estilo de vida, transformándose rápidamente de una consola casera a una consola portátil."
    
    img: "https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-neon-red-neon-blue-set/gallery/image03?v=2022042115"
    
    price: 40000
    
    stock: 122
    
    title: "Nintendo Switch"
![item](https://i.imgur.com/WLT8AcH.png)
   
## Probando la página

Una vez configurado todo usa el comando `npm start`  para correr la página de forma local, generalmente se ejecuta en [localhost](http://localhost:3000/).
Puedes hacer la prueba y ver las distintas funcionabilidades que la página ofrece.
Agrega los productos y simula una compra, para verificar que efectivamente la orden se hizo ve a tu almacenamiento de firestore y observaras que se generó la colección ordes, en este caso adjunto la imagen de la orden creada en el [video](https://www.youtube.com/watch?v=AH0-G0jH2Xo)

![Orden 1](https://i.imgur.com/u7YZSti.png)
![Order 2](https://i.imgur.com/zNL1FMK.png)
![Order 3](https://i.imgur.com/jSRBKW0.png)
## Por último...
Quería darte las gracias por leer hasta este punto y ante cualquier duda o consulta no dudes en comunicarte conmigo mediante mi [mail](mailto:fer.j.noceti@gmail.com) o por [discord](https://discord.gg/AqFjpjAfXq)
