import { IngressoModel } from "../models/IngressoModel";
import { scan } from "../utils/scan";

export class IngressoController {
  private readonly ingressoModel = new IngressoModel();

  async inserir() {
    const sessao_id = scan("Id da Sessão: ");
    const poltrona_id = scan("Id da Poltrona: ");
    const cpf_cliente = scan("Cpf do Cliente: ");

    await this.ingressoModel.create(+sessao_id, +poltrona_id, cpf_cliente);
  }
}
