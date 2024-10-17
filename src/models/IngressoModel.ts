import { executeQuery } from "../database/connection";

type IngressoModelProps = {
  id?: number;
  sessao_id: number;
  poltrona_id: number;
  cpf_cliente: string;
};

export class IngressoModel implements IngressoModelProps {
  id?: number;
  sessao_id: number;
  poltrona_id: number;
  cpf_cliente: string;

  constructor(props: IngressoModelProps) {
    Object.assign(this, props);
  }

  static async create(ingresso: Omit<IngressoModel, "id">) {
    const sql = `INSERT INTO ingressos (sessao_id, poltrona_id, cpf_cliente) VALUES ("${ingresso.sessao_id}", ${ingresso.poltrona_id}, "${ingresso.cpf_cliente}");`;
    await executeQuery(sql);
    console.log("Ingresso vendido com sucesso!");
  }

  static async read() {
    const sql = "SELECT * FROM ingressos;";
    return await executeQuery(sql);
  }

  static async count() {
    const sql = "SELECT COUNT(*) AS ingressosQtd FROM ingressos;";
    const ingressosQtd = await executeQuery<{ ingressosQtd: number }[]>(sql);
    return ingressosQtd[0].ingressosQtd;
  }
}
