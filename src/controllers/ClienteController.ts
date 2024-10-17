import { ClienteModel } from "../models/ClienteModel";
import { scan } from "../utils/scan";

export class ClienteController {
  async inserir() {
    const cpf = scan("Digite o CPF: ");
    const clienteExistente = await ClienteModel.findByCpf(cpf);

    if (clienteExistente) {
      console.log("\nCliente já registrado!!!\n");
      return;
    }

    const nome = scan("Digite o nome do cliente: ");
    const idade = +scan("Digite a idade: ");

    const novoCliente = new ClienteModel({ cpf, idade, nome });

    await ClienteModel.create(novoCliente);
  }

  async listar() {
    const cliente = await ClienteModel.read();
    console.table(cliente);
    scan("Aperte a tecla Enter para continuar >>>");
  }

  async excluir() {
    const cpf = scan("Digite o CPF para excluir: ");

    await ClienteModel.delete(cpf);
  }
}
