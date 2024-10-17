import { executeQuery } from "../database/connection";

export class IngressoModel {
  async create(sessao_id: number, poltrona_id: number, cpf_cliente: string) {
    const sql = `INSERT INTO ingressos (sessao_id, poltrona_id, cpf_cliente) VALUES ("${sessao_id}", ${poltrona_id}, "${cpf_cliente}");`;
    await executeQuery(sql);
    console.log("Ingresso vendido com sucesso!");
  }

  async read() {
    const sql = "SELECT * FROM ingressos;";
    return await executeQuery(sql);
  }

  async count() {
    const sql = "SELECT COUNT(*) AS ingressosQtd FROM ingressos;";
    const ingressosQtd = await executeQuery<{ filmesQtd: number }>(sql);
    return ingressosQtd[0].ingressosQtd;
  }
}
