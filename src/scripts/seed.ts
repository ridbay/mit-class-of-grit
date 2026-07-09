import { STUDENTS } from "../data/constants.js";
import fs from "fs";

// Using TSX or node to run this script requires adjusting imports.
// Assuming we run this via `tsx src/scripts/seed.ts`

const sqlFile = "seed.sql";

let sql = "INSERT INTO students (id, matric, name) VALUES\n";

const values = STUDENTS.map((student) => {
  // Use the matric number as the primary key id
  return `('${student.matric}', '${student.matric}', '${student.name.replace(/'/g, "''")}')`;
});

sql += values.join(",\n") + ";\n";

fs.writeFileSync(sqlFile, sql);
console.log(`Generated ${sqlFile} with ${STUDENTS.length} students.`);
