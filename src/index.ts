import { setTimeout } from "node:timers/promises";
import { MenuController } from "./controllers/MenuController";
import { connectDb, disconnectDb } from "./database/connection";
import { scan } from "./utils/scan";

const main = async () => {
  await connectDb();

  const menuController = new MenuController();

  while (true) {
    menuController.mostrarMenu();
    const opt = +scan(">>> ");

    if (opt < 1 || opt > 5) {
      console.log("\nOpção inválida!!!\n");
      await setTimeout(1000);
      continue;
    }

    if (opt === 5) {
      disconnectDb();
      console.log("Saindo...");
      break;
    }

    menuController.mostrarSubMenu(+opt);

    await menuController.splashScreen();
    await setTimeout(2000);
  }
};

main();
