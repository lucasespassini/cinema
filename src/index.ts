import { FilmeController } from "./controllers/FilmeController";
import { MenuController } from "./controllers/MenuController";
import { connection } from "./database/connection";
import { scan } from "./utils/scan";

const main = async () => {
  const menuController = new MenuController();
  const filmeController = new FilmeController();

  let opt = "";

  while (opt !== "5") {
    menuController.showMainMenu();
    opt = scan(">>> ");

    switch (opt) {
      case "1":
        menuController.showSubMenu(+opt);
        break;
      case "5":
        connection.end();
        break;
      default:
        console.log("Opção inválida!!!");
    }
  }

  console.log("Saindo...");
};

main();
