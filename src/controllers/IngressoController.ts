import { IngressoModel } from "../models/IngressoModel";
import { SessaoModel } from "../models/SessaoModel";
import { scan } from "../utils/scan";

export class IngressoController {
  async inserir() {
    await SessaoModel.read();
    const sessao_id = +scan("Id da Sessão: ");
    const poltrona_id = +scan("Id da Poltrona: ");
    const cpf_cliente = scan("Cpf do Cliente: ");

    const ingresso = new IngressoModel({ cpf_cliente, poltrona_id, sessao_id });
    await IngressoModel.create(ingresso);
  }
}
