import { FilmeModel } from "../models/FilmeModel";
import { IngressoModel } from "../models/IngressoModel";
import { logo } from "../utils/menu";
import { scan } from "../utils/scan";
import { ClienteController } from "./ClienteController";
import { FilmeController } from "./FilmeController";
import { IngressoController } from "./IngressoController";

export class MenuController {
  private readonly filmeController = new FilmeController();
  private readonly clienteController = new ClienteController();
  private readonly filmeModel = new FilmeModel();
  private readonly ingressoModel = new IngressoModel();
  private readonly ingressoController = new IngressoController();

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
    const ingressosQtd = await this.ingressoModel.count();

    console.log(`
======================================================================================================
\nSISTEMA DE GERENCIAMENTO DE BILHETERIA DE CINEMA
\nTOTAL DE REGISTROS EXISTENTES:

  1 - CLIENTES:
  2 - FILMES: ${filmesQtd}
  3 - INGRESSOS: ${ingressosQtd}
  4 - SALAS:
  5 - SESSÕES:

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
      case 4:
        break;
    }
  }

  private async menuRelatorio() {
    console.log(`
    1 - Ingressos Vendidos
    2 - Sessões Atuais
    3 - Voltar
  `);

    const opt = +scan(">>> ");

    switch (opt) {
      case 1:
        break;
      case 2:
        console.log("mostrar relatorio Sessões Atuais");
        break;
      case 3:
        break;
    }
  }
  1;

  private async menuTabelas() {
    console.log(`
      1 - Cliente
      2 - Filme
      3 - Ingresso
      4 - Sessao
      5 - Voltar 
    `);

    const opt = +scan(">>> ");

    switch (opt) {
      case 1:
        await this.clienteController.inserir();
        break;
      case 2:
        await this.filmeController.inserir();
        break;
      case 3:
        await this.ingressoController.inserir();
        //TODO: Criar o menu do ingresso para mostrar a tabela de sessões e poltronas para usuário escolher;
        break;
      case 4:
        break;
      case 5:
        break;
    }
  }
}
