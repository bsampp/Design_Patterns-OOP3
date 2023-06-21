import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    startOrder(): void {
        this.getFood();
        console.log("Hot Dog: Iniciando pedido..");
    }
    getFood(): void {
        console.log("Hot Dog: Preparando comida..");
    }


}