import mysql from "mysql2";
import { readFileSync } from "node:fs";

const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT ? +process.env.PORT : 3306,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function executeQuery<T = any>(sql: string): Promise<T> {
  const result = await new Promise((resolve, reject) => {
    connection.query(sql, (error, result) =>
      error ? reject(error) : resolve(result?.[0])
    );
  });

  return result as T;
}

export async function connectDb() {
  connection.connect();

  const createTablesSQL = readFileSync("sql/create-tables.sql", "utf-8");
  const populateTablesSQL = readFileSync("sql/populate-tables.sql", "utf-8");
  const createTriggersSQL = readFileSync("sql/create-triggers.sql", "utf-8");
  const createProceduresSQL = readFileSync(
    "./sql/create-procedures.sql",
    "utf-8"
  );

  await executeQuery(createTablesSQL);
  await executeQuery(populateTablesSQL);
  await executeQuery(createTriggersSQL);
  await executeQuery(createProceduresSQL);
}

export function disconnectDb() {
  connection.end();
}
