import IFood from "./interfaces/IFood";

export default class Hamburger implements IFood{
    startOrder(): void {
        this.getFood();
        console.log("Hamburger: Iniciando pedido..");
    }
    getFood(): void {
        console.log("Hamburger: Preparando comida..");
    }

}