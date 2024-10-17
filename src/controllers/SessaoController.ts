import { SessaoModel } from "../models/SessaoModel";
import { scan } from "../utils/scan";

export class SessaoController {
  private readonly sessaoModel = new SessaoModel();

  async inserir() {
    const filme_id = +scan("Id do filme: ");
    const sala_id = +scan("Id da sala: ");
    const horario_inicio = scan(
      "Digite o Horario de inicio do filme (DD/MM/AAAA HH/MM): "
    );
    await this.sessaoModel.create(filme_id, sala_id, horario_inicio);
  }

  async listar() {

  }

  async atualizar() {
    
  }

  async excluir() {}
}
