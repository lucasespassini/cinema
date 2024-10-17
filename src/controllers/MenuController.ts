import { FilmeModel } from "../models/FilmeModel";
import { logo } from "../utils/menu";
import { scan } from "../utils/scan";
import { FilmeController } from "./FilmeController";

export class MenuController {
  private readonly filmeModel = new FilmeModel();
  private readonly filmeController = new FilmeController();

  mostrarMenu() {
    console.log(`
${logo}

\nSISTEMA DE GERENCIAMENTO DE BILHETERIA DE CINEMA\n
  ESCOLHA UMA OPÇÃO:

  1 - RELATÓRIOS
  2 - INSERIR REGISTROS
  3 - REMOVER REGISTROS
  4 - ATUALIZAR REGISTROS
  5 - SAIR \n`);
  }

  async splashScreen() {
    const filmesQtd = await this.filmeModel.count();

    console.log(`
======================================================================================================
\nSISTEMA DE GERENCIAMENTO DE BILHETERIA DE CINEMA
\nTOTAL DE REGISTROS EXISTENTES:

  1 - CLIENTES:
  2 - FILMES: ${filmesQtd}
  3 - INGRESSOS:
  4 - SALAS:
  5 - SESSÕES:\n
CRIADO POR:
  ALANA 
  LUIZ 
  JULIANA
  JOÃO VICTOR
  PATRICK

DISCIPLINA: BANCO DE DADOS - 2024/2
PROFESSOR: HOWARD ROATTI\n
======================================================================================================`);
  }

  async mostrarSubMenu(type: number) {
    switch (type) {
      case 1:
        this.menuRelatorio();
        break;
      case 2:
        this.menuTabelas();
        break;
      case 3:
        this.menuRelatorio();
        break;
    }
  }

  private menuRelatorio() {
    console.log(`
    1 - Ingressos Vendidos
    2 - Sessões Atuais
    3 - Voltar
  `);

    const opt = +scan(">>> ");

    switch (opt) {
      case 1:
        console.log("mostar relatorio Ingressos Vendidos");
        break;
      case 2:
        console.log("mostar relatorio Sessões Atuais");
        break;
      case 3:
        break;
    }
  }

  private async menuTabelas() {
    console.log(`
      1 - Cliente
      2 - Filme
      3 - Ingresso
      4 - Salas
      5 - Sessao
      6 - Voltar 
    `);

    const opt = +scan(">>> ");

    switch (opt) {
      case 1:
        break;
      case 2:
        await this.filmeController.inserir();
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
    }
  }
}
