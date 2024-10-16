import { executeQuery } from "../database/connection";

export class FilmeModel {
  async create(titulo: string, duracao: string, genero: string) {
    const sql = `INSERT INTO filmes (titulo, duracao, genero) VALUES ("${titulo}", "${duracao}", "${genero}");`;
    await executeQuery(sql);
    console.log("Filme cadastrado com sucesso!");
  }

  async read() {
    const sql = "SELECT * FROM filmes;";
    return await executeQuery(sql);
  }

  async count() {
    const sql = "SELECT COUNT(*) FROM filmes;";
    return await executeQuery<number>(sql);
  }

  update() {}

  delete() {}
}
