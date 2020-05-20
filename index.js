const fs = require( "fs");
const path = require( "path");
const md = require( "markdown-it")();

let notes = fs.readdirSync( path.join( __dirname, "notes"))
    .map( filename => fs.readFileSync( path.join( __dirname, "notes", filename).toString()))
    .join( "\n---\n");

console.log( notes.toString());

let shareboard = md.render(notes);
console.log( shareboard);

fs.writeFileSync( "index.html", `
<html>
    <body>
        ${shareboard}
    </body>
</html>
`);

const Web = require( "webwebweb" );
Web.Run( 8000 ); 