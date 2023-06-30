import Idrinks from "../../foods/drink/interfaces/IDrinks";
import IFood from "../../foods/snack/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): Idrinks;
    createDeliveryFood(): IFood;
}