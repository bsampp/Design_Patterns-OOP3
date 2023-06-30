import Idrinks from "../foods/drink/interfaces/IDrinks";
import IFood from "../foods/snack/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import SoftDrink from "../foods/drink/SoftDrink";
import HotDog from "../foods/snack/HotDog";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): Idrinks {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }

}