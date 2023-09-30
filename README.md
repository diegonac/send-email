# Send Email
API developed with TypeScript and Express.js that utilizes pdfmake to dynamically generate PDF files. Integrated with Nodemailer, the API facilitates the sending of these PDF files via email. With an efficient approach, the API automates the process of creating and distributing customized PDF documents.

[Documentación en español](README-es.md)

***

## Clone the project
To get started, you'll need to clone the project repository into your chosen directory. Use the following command:

```git clone https://github.com/diegonacimiento/send-email.git```

***

## Installing Dependencies
To install the necessary dependencies, run the following command:

``` npm install ```

***

## Environment variables
Send Email relies on some environment variables. You'll need to create a ".env" file in the root directory of the project and define these variables. Here's an example of a ".env" file with explanations:
```
PORT=3000
ggMail=""
ggKey=""
myFrontend=""
```

To configure email sending, ensure you have a Google account linked to your phone number and two-step verification enabled in "Account" ⇒ "Security" ⇒ "Google Account access." Then, go to "App passwords" and add 'NodeApp'.

- ggMail: Use the email with which you generated the application password.

- ggKey: Use the generated password; do not share it with anyone.

- myFrontend: Use the URL of your project (in production) or http://localhost:3000 (in development).


***

## HTTP request
If you are using Postman, Insomnia, or an equivalent tool, go to the "index.ts" file and comment out the middleware on line 23 of the code:

**IMPORTANT**: We have commented out the code line only in a development environment for testing the API. In production, that code line should not be commented.

``` // app.use(domainErrorHandler); ```

This step is essential for making HTTP requests. Then, run the following command:

```npx tsc ```

#### Example request

Endpoint: "http://localhost:3000/api/v1/email/send-email"

The POST request should send a body as shown below:

``` 
{
  "amounts": ["2", "3"],
  "client": "Diego",
  "email": "youremail@example.com",
  "prices": ["10", "20"],
  "products": ["Shirt", "Shoe"],
  "saleCondition": "Cash",
  "subTotal": ["20", "60"],
  "total": "80"
}

```

***

## Starting the project
To start the project, use the following command:

```npm run dev```

This command will initiate the API, and you can begin using it as intended.

***

This documentation should provide you with the necessary information to set up and use send-email. If you have more questions or encounter issues, feel free to ask for assistance.

