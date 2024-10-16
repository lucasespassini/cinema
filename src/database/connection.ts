import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT ? +process.env.PORT : 3306,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function executeQuery<T = any>(sql: string): Promise<T> {
  const result: T = await new Promise((resolve, reject) => {
    connection.query(sql, (error, result) =>
      error ? reject(error) : resolve(result as T)
    );
  });

  return result;
}
