import { MenuController } from "./controllers/MenuController";
import { connectDb, disconnectDb } from "./database/connection";
import { scan } from "./utils/scan";

const main = async () => {
  await connectDb();
  const menuController = new MenuController();

  let opt = "";

  while (opt !== "5") {
    menuController.showMainMenu();
    opt = scan(">>> ");

    switch (opt) {
      case "1":
        menuController.showSubMenu(+opt);
        break;
      case "5":
        disconnectDb();
        break;
      default:
        console.log("Opção inválida!!!");
    }
  }

  console.log("Saindo...");
};

main();
