import Company from "./delivery/consts/Company";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";
import AiqfomeDelivery from "./delivery/AiqfomeDelivery";
import IFoodDelivery from "./delivery/IFoodDelivery";
import Client from "./clients/Client";

const currentCompany = Company.Aiqfome
let factory! : IDeliveryFactory;

switch(currentCompany){
    case Company.Aiqfome:
        factory = new AiqfomeDelivery();
        break;
    case Company.Ifood:
        factory = new IFoodDelivery();
        break;
    default:
        console.log("Companhia não definida.")
        break;
}

const client = new Client(factory);
client.startDelivery();