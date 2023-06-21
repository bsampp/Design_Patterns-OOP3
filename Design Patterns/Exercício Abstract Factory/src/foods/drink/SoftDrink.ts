import Idrinks from "./interfaces/IDrinks";

export default class SoftDrink implements Idrinks{
    startOrder(): void {
        this.getFood();
        console.log("Soft Drink: Iniciando pedido..");
    }
    getFood(): void {
        console.log("Soft Drink: Preparando bebida..");
    }

}