import { ClienteModel } from "../models/ClienteModel";
import { FilmeModel } from "../models/FilmeModel";
import { IngressoModel } from "../models/IngressoModel";
import { logo } from "../utils/menu";
import { scan } from "../utils/scan";
import { ClienteController } from "./ClienteController";
import { FilmeController } from "./FilmeController";
import { IngressoController } from "./IngressoController";
import { SessaoController } from "./SessaoController";

export class MenuController {
  private readonly filmeController = new FilmeController();
  private readonly clienteController = new ClienteController();
  private readonly filmeModel = new FilmeModel();
  private readonly ingressoModel = new IngressoModel();
  private readonly ingressoController = new IngressoController();
  private readonly sessaoController = new SessaoController();

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
    const clientesQtd = await ClienteModel.count();
    const filmesQtd = await this.filmeModel.count();
    const ingressosQtd = await this.ingressoModel.count();

    console.log(`
======================================================================================================
\nSISTEMA DE GERENCIAMENTO DE BILHETERIA DE CINEMA
\nTOTAL DE REGISTROS EXISTENTES:

  1 - CLIENTES: ${clientesQtd}
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
        this.menuTabelas("CRIAR");
        break;
      case 3:
        this.menuTabelas("DELETAR");
        break;
      case 4:
        this.menuTabelas("ATUALIZAR");
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

  private async menuTabelas(acao: "CRIAR" | "ATUALIZAR" | "DELETAR") {
    console.log(`
      ${acao !== "ATUALIZAR" ? "1 - Cliente" : ""}
      2 - Filme
      3 - Ingresso
      4 - Sessao
      5 - Voltar 
    `);

    const opt = +scan(">>> ");

    switch (opt) {
      case 1:
        if (acao === "CRIAR") {
          await this.clienteController.inserir();
        } else if (acao === "DELETAR") {
          await this.clienteController.excluir();
        }
        break;
      case 2:
        if (acao === "CRIAR") {
          await this.filmeController.inserir();
        } else if (acao === "DELETAR") {
          await this.filmeController.excluir();
        } else if (acao === "ATUALIZAR") {
          await this.filmeController.atualizar();
        }
        break;
      case 3:
        await this.ingressoController.inserir();
        //TODO: Criar o menu do ingresso para mostrar a tabela de sessões e poltronas para usuário escolher;
        break;
      case 4:
        await this.sessaoController.inserir();
        break;
      case 5:
        break;
    }
  }
}
