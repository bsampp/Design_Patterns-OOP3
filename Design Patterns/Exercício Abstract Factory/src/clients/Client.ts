import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import Idrinks from "../foods/drink/interfaces/IDrinks";
import IFood from "../foods/snack/interfaces/IFood";

export default class Client{
    private food: IFood;
    private drink: Idrinks;
    
    constructor(factory: IDeliveryFactory){
        this.food = factory.createDeliveryFood();
        this.drink = factory.createDeliveryDrink();
    }

    startDelivery():void {
        this.food.startOrder();
        this.drink.startOrder();
    }
}