import Idrinks from "../foods/drink/interfaces/IDrinks";
import IFood from "../foods/snack/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import Beer from "../foods/drink/Beer";
import Hamburger from "../foods/snack/Hamburger";

export default class AiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): Idrinks {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburger();
    }

}