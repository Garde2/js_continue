const handlebars = require("handlebars");
const template1 = handlebars.compile("<p>{{someVar}}<p>");
const result = template1({ someVar: "Hello!" });
console.log(result);

const template = handlebars.compile(
  "{{#if bold}} <b>Hello!</b>{{else}} <p>Hello!</p> {{/if}}"
);

console.log(template({ bold: true }));
console.log(template({ bold: false }));

const items = [
  { name: "first item", number: 3 },
  { name: "second number", number: 5 },
];

const template2 = handlebars.compile(
  "{{#each items}} <p>{{this.name}} {{this.number}}</p> {{/each}}"
);
console.log(template2({ items }));
