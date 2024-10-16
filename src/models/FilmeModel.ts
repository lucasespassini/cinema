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
    const sql = "SELECT COUNT(*) AS filmesQtd FROM filmes;";
    const { filmesQtd } = await executeQuery<{ filmesQtd: number }>(sql);
    return filmesQtd;
  }

  async update(titulo: string, duracao: string, genero: string, id: number) {
    const sql = `
    UPDATE filmes
    SET titulo = '${titulo}',
        duracao = '${duracao}',
        genero = '${genero}'
    WHERE id = ${id}; 
`;
    await executeQuery(sql);
    console.log("Filme atualizado com sucesso!");
  }

  delete() {}
}
