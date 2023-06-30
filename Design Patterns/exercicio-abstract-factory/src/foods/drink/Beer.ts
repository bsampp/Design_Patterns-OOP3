import Idrinks from "./interfaces/IDrinks";

export default class Beer implements Idrinks{
    startOrder(): void {
        this.getFood();
        console.log("Cerveja: Iniciando pedido..");
    }
    getFood(): void {
        console.log("Cerveja: Preparando bebida..");
    }


}