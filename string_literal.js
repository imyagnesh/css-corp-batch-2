// String Literals

// First Name

// Camel Case -> firstName -> Preffered Approch Javascript
// snack Case -> first_case -> Prefered Approch for python

const firstName = "Yagnesh";

const lastName = "Modh";

// Yagnesh Modh

// const a = 1;
// const b = 2;

// console.log(b + a);

// Backtick
// Python
const fullName = `${firstName} ${lastName}`;
// const fullName = firstName + ' ' + lastName;

console.log(fullName);

// Yagnesh's Car

const pos = `${firstName}'s Car`;

// const pos = firstName + '\'s car';

console.log(pos);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

const title = "Portfolio";

const newHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    
</body>
</html>`;

console.log(newHtml);

// Primitive Type data only
const bul = false;
console.log(typeof `${bul}`);
console.log(`${bul}`);

const a = 1;
console.log(typeof a);

const b = a.toString();
console.log(typeof b);
console.log(b);

const c = `${a}`;
console.log(c);
console.log(typeof c);

// const html = '<!DOCTYPE html>' +
// '\n<html lang="en">' +
// '\n<head>' +
//     '\n\t<meta charset="UTF-8">' +
//     '\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
//     '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
//     '\n\t<title>' + title + '</title>' +
// '\n</head>' +
// '\n<body>' +
//     '\n' +
// '\n</body>' +
// '\n</html>';

// console.log(html);
