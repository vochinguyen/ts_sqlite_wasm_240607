`insert into mytable values ('hello', 'world5'), ('hello', 'world6'), ('hello', 'world7'), ('hello', 'world8')`;

let insertSQL = "insert into mytable values ";
for (let i = 7; i < 100000; i++) {
  insertSQL += `('hello ${i}', 'world ${i}'), `;
}

const fs = require("node:fs");
fs.writeFile("insertSql.txt", insertSQL, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
    console.log("file written successfully");
  }
});
