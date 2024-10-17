import { executeQuery } from "../database/connection";

type SessaoModelProps = {
  id?: number;
  filme_id: number;
  sala_id: number;
  horario_inicio: string;
};

export class SessaoModel implements SessaoModelProps {
  id?: number;
  filme_id: number;
  sala_id: number;
  horario_inicio: string;

  constructor(props: SessaoModelProps) {
    Object.assign(this, props);
  }
  static async create(sessao: Omit<SessaoModel, "id">) {
    const sql = `INSERT INTO sessoes (filme_id, sala_id, horario_inicio) VALUES (${sessao.filme_id}, ${sessao.sala_id}, ${sessao.horario_inicio});`;
    await executeQuery(sql);
    console.log("Sessão criada com sucesso!");
  }

  static async read() {
    const sql = "SELECT * FROM sessoes";
    const sessoes = await executeQuery(sql);
    return console.table(sessoes);
  }
}
