const pdfBufferPromise = new Promise<Buffer>((resolve, reject) => {
  const buffers: Buffer[] = [];

  pdfDoc.on('data', (buffer: Buffer) => buffers.push(buffer));

  pdfDoc.on('end', () => {
    const concatenatedBuffer = Buffer.concat(buffers);
    resolve(concatenatedBuffer);
  });

  pdfDoc.end();
});

pdfBufferPromise: Esta variable contendrá la promesa que se resolverá con el búfer del PDF
una vez que se haya completado la generación del PDF.

new Promise<Buffer>((resolve, reject) => { ... }): Aquí estamos creando una nueva promesa
que toma dos funciones de resolución: resolve y reject. Estas funciones se utilizan para
indicar si la promesa se cumplió con éxito o si ocurrió un error.

const buffers: Buffer[] = [];: Creamos un array buffers que almacenará los fragmentos
de búfer generados durante la creación del PDF.

pdfDoc.on('data', (buffer: Buffer) => buffers.push(buffer));: Estamos escuchando el
evento 'data' que se emite mientras se está generando el PDF. Cada vez que se emite
este evento, estamos almacenando el fragmento de búfer en el array buffers.

pdfDoc.on('end', () => { ... });: Estamos escuchando el evento 'end' que se emite cuando
la generación del PDF se completa con éxito. En este punto, todos los fragmentos de
búfer han sido recopilados en el array buffers.

const concatenatedBuffer = Buffer.concat(buffers);: Aquí estamos concatenando todos
los fragmentos de búfer en un único búfer grande utilizando el método Buffer.concat().

resolve(concatenatedBuffer);: Estamos resolviendo la promesa con el búfer completo del PDF
una vez que se haya completado la generación. Esto significa que la promesa se cumplirá
con éxito y el valor resultante será el búfer del PDF.

pdfDoc.end();: Estamos indicando que la generación del PDF ha finalizado, lo que eventualmente
activará el evento 'end'.

En resumen, esta función crea una promesa que envuelve la generación del PDF utilizando pdfmake.
A medida que se generan fragmentos de búfer, los almacenamos en un array y luego, cuando se completa
la generación, concatenamos esos fragmentos en un búfer único y resolvemos la promesa con ese búfer.
Esta promesa luego se usa para adjuntar el PDF al correo electrónico enviado a través de Nodemailer.
