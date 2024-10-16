import { FilmeModel } from "../models/FilmeModel";
import { logo } from "../utils/menu";

export class MenuController {
  private filmeModel = new FilmeModel();

  mostrarMenu() {
    console.log(`
${logo}

\n SISTEMA DE GERENCIAMENTO DE BILHETERIA DE CINEMA\n
    ESCOLHA UMA OPÇÃO: \n

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
        break;
      case 3:
        break;
    }
  }

  private menuRelatorio() {
    console.log(`
    1 - Ingressos Vendidos
    2 - Sessões Atuais
    3 - Voltar
  `);
  }
}
