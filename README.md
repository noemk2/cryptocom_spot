Exchange bot crypto.com spot with javascript/node
==================

Introducción a cryptocom_spot
==================

cryptocom_spot, este bot te perminte:
 
 1. comprar/vender market  
 2. comprar/vender limit 
 

👨‍💻 Instalación en local
===========

Para correr este proyecto en local debes seguir los siguientes pasos:

Paso 1: Pre - Requisitos
------------------------------

1. Asegúrese de haber instalado [Node.js] ≥ 12 ((recomendamos usar [nvm])
2. Asegúrese de haber instalado yarn: `npm install -g yarn`
3. Instalar dependencias: `yarn install`
   
Step 2: Clonar Repositorio
-------------------------------    

Este comando nos permite clonar el repositorio de nuestro proyecto 

```bash
git clone https://github.com/noemk2/cryptocom_spot.git
```

Una vez que hayas descargado el repositorio, asegurate de ejecutar los comandos dentro del repositorio descargado. Puedes hacerlo con
```bash
cd cryptocom_spot/
```

modificar el file .env y agregar su apikey y secret_key

`bash
KEY=apikey
SKEY=secret_key
`

Step 3: implementacion 
------------------------------------------------------------------------------------

Instale el gestor de dependencia de Node.js dentro del repositorio

```bash
npm install
```

actualice la lista de merdados de usdt
```bash
npm run update_list
```

Consulte` package.json` para obtener una lista completa de `scripts` que puede ejecutar con` yarn`). Este script le devuelve un contrato inteligente provisional
implementado (guárdelo para usarlo más tarde)


¡Felicitaciones, ahora tendrá un entorno completo 


✏️ Comando  buy vmarket: 
-----------------------------------------------

Permite comprar al precio actual 
`npm run market < 100$ > `

Para Linux:
```bash
npm run market btc 100
```



🤖 Test 
==================

Las pruebas son parte del desarrollo, luego, para ejecutar las pruebas en el contrato inteligente , debe ejecutar el siguiente comando:

 coming soon

==============================================

  [create-near-app]: https://github.com/near/create-near-app
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [nvm]: https://github.com/nvm-sh/nvm
