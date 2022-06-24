import { serve } from "https://deno.land/std@0.144.0/http/mod.ts";
import { DB } from "https://deno.land/x/sqlite@v3.4.0/mod.ts";

import { prepareFile } from "./mod.ts";

import { pathFromURL } from "./src/memory_file.ts";
// prepare file
await prepareFile("./db.sqlite");

console.log(pathFromURL("./db.sqlite"));

// read db
const db = new DB("./db.sqlite", { mode: "read" });

// very simple server
serve(() => Response.json(db.query("SELECT * FROM people")));
