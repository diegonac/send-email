# Send Email
API desarrollada con TypeScript y Express.js que utiliza pdfmake para generar archivos PDF dinámicamente. La API, integrada con Nodemailer, facilita el envío de estos archivos PDF por correo electrónico. Con un enfoque eficiente, la API automatiza el proceso de creación y distribución de documentos PDF personalizados.

***

## Clonación del proyecto
Para comenzar, deberás clonar el repositorio del proyecto en el directorio de tu elección. Usa el siguiente comando:

```git clone https://github.com/diegonacimiento/send-email.git```

***

## Instalación de dependencias
Para instalar las dependencias necesarias, ejecuta el siguiente comando:

``` npm install ```

***

## Variables de entorno
Send Email depende de algunas variables de entorno. Deberás crear un archivo ".env" en el directorio raíz del proyecto y definir estas variables. Aquí tienes un ejemplo de un archivo ".env" con explicaciones:
```
PORT=3000
ggMail=""
ggKey=""
myFrontend=""
```

Para configurar el envío de correos electrónicos, asegúrate de tener una cuenta de Google vinculada a tu número de teléfono y tener la verificación en dos pasos activada en "Administrar cuenta" ⇒ "Seguridad" ⇒ "Acceso a Google". Luego, ve a "Contraseñas de aplicaciones" y agrega 'NodeApp'.

- ggMail: Utiliza el correo electrónico con el que generaste la contraseña de la aplicación.

- ggKey: Utiliza la contraseña generada; no la compartas con nadie.

- myFrontend: Utiliza la url de tu proyecto (en producción) o http://localhost:5173 (en desarrollo)


***

## Petición http
Si utilizas Postman, Insomnia u otro equivalente, dirígete al archivo "index.ts" y comenta el middleware en la línea 23 del código:

**IMPORTANTE**: Hemos dejado la línea de código comentada únicamente en un entorno de desarrollo para probar la API. En producción, esa línea de código no debe estar comentada.

``` // app.use(domainErrorHandler); ```

Este paso es esencial para realizar solicitudes HTTP. Luego, ejecuta el siguiente comando:

```npx tsc ```

#### Ejemplo de solicitud

Endpoint: "http://localhost:3000/api/v1/email/send-email"

La solicitud POST debe enviar un body como se muestra a continuación:

``` 
{
  "amounts": ["2", "3"],
  "client": "Diego",
  "email": "tucorreo@example.com",
  "prices": ["10", "20"],
  "products": ["Remera", "Zapato"],
  "saleCondition": "Efectivo",
  "subTotal": ["20", "60"],
  "total": "80"
}

```

***

## Inicio del proyecto
Para iniciar el proyecto, utiliza los siguientes comandos:

```npx tsc```

```npm run dev```

Este comando iniciará la API y podrá comenzar a usarla según lo previsto.

***

Esta documentación debería proporcionarle la información necesaria para configurar y utilizar send-email. Si tiene más preguntas o encuentra problemas, no dude en solicitar ayuda.

