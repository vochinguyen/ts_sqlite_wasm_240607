# ts_sqlite_wasm_240607

Minimal example from scratch https://github.com/phiresky/sql.js-httpvfs?tab=readme-ov-file#minimal-example-from-scratch

Then, go to a new directory and add a few dependencies:
```
    mkdir example
    cd example
    echo '{}' > package.json
    npm install --save-dev webpack webpack-cli typescript ts-loader http-server
    npm install --save sql.js-httpvfs
    npx tsc --init
```
Edit the generated tsconfig.json file to make it more modern:
```
    ...
    "target": "es2020",
    "module": "es2020",
    "moduleResolution": "node",
    ...
```
Create a webpack config, minimal index.html file and TypeScript entry point:
- webpack.config.js
- index.html
- src/index.ts

Finally, create a database:

```
    sqlite3 example.sqlite3 "create table mytable(foo, bar)"
    sqlite3 example.sqlite3 "insert into mytable values ('hello', 'world')"
```

and build the JS bundle and start a webserver:

```
    ./node_modules/.bin/webpack --mode=development
    ./node_modules/.bin/http-server
```

Then go to http://localhost:8080

And you should see the output to the query select * from mytable.

[{"foo":"hello","bar":"world"}]