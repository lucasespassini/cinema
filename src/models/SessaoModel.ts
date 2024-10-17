import { executeQuery } from "../database/connection";

export class SessaoModel {
  async create(filme_id: number, sala_id: number, horario_inicio: string) {
    const sql = `INSERT INTO sessoes (filme_id, sala_id, horario_inicio) VALUES (${filme_id}, ${sala_id}, ${horario_inicio});`;
    await executeQuery(sql);
    console.log("Sessão criada com sucesso!");
  }

  async read() {
    const sql = "SELECT * FROM sessoes";
    
  }
}
