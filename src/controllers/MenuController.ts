import { FilmeModel } from "../models/FilmeModel";

export class MenuController {
  private filmeModel = new FilmeModel();

  showMainMenu() {
    console.log(`
╔╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╗
╠╬╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╬╣
╠╣                                                                      ╠╣
╠╣    █████████   ███                           █████████   ████  ████  ╠╣
╠╣   ███░░░░░███ ░░░                           ███░░░░░███ ░░███ ░░███  ╠╣
╠╣  ███     ░░░  ████  ████████    ██████     ░███    ░███  ░███  ░███  ╠╣
╠╣ ░███         ░░███ ░░███░░███  ███░░███    ░███████████  ░███  ░███  ╠╣
╠╣ ░███          ░███  ░███ ░███ ░███████     ░███░░░░░███  ░███  ░███  ╠╣
╠╣ ░░███     ███ ░███  ░███ ░███ ░███░░░      ░███    ░███  ░███  ░███  ╠╣
╠╣  ░░█████████  █████ ████ █████░░██████     █████   █████ █████ █████ ╠╣
╠╣   ░░░░░░░░░  ░░░░░ ░░░░ ░░░░░  ░░░░░░     ░░░░░   ░░░░░ ░░░░░ ░░░░░  ╠╣
╠╣                                                                      ╠╣
╠╬╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╬╣
╚╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╝

\n SISTEMA DE GERENCIAMENTO DE BILHETERIA DE CINEMA\n

    \n ESCOLHA UMA OPÇÃO: \n

    1 - RELATÓRIOS
    2 - INSERIR REGISTROS
    3 - REMOVER REGISTROS
    4 - ATUALIZAR REGISTROS
    5 - SAIR \n`);
  }

  async splashScreen() {
    const filmesQtd = await this.filmeModel.count();

    console.log(`
\n SISTEMA DE GERENCIAMENTO DE BILHETERIA DE CINEMA\n  

\n TOTAL DE REGISTROS EXISTENTES:

1 - CLIENTES:
2 - FILMES: ${filmesQtd}
3 - INGRESSOS:
4 - SALAS:
5 - SESSÕES:

\n CRIADO POR:
\n ALANA \n
\n LUIZ \n
\n JULIANA\n
\n JOÃO VICTOR\n
\n PATRICK\n

\n DISCIPLINA: BANCO DE DADOS - 2024/2\n
\n PROFESSOR: HOWARD ROATTI\n`);
  }

  showSubMenu(type: number) {
    switch (type) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }
}
