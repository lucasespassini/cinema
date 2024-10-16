import { FilmeModel } from "../models/FilmeModel";
import { scan } from "../utils/scan";

export class FilmeController {
  private readonly filmeModel = new FilmeModel();

  async inserir() {
    const titulo = scan("Titulo do filme: ");
    const duracao = scan("Duração do filme: ");
    const genero = scan("Gênero do filme(Ex: Terror): ");

    await this.filmeModel.create(titulo, duracao, genero);
  }

  async listar() {}

  async atualizar() {}

  async excluir() {}
}
