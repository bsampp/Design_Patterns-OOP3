import Client from "./clients/client";
import LimeTransport from "./transport/LimeTransport";
import NineNineTransport from "./transport/NineNineTransport";
import UberTransport from "./transport/UberTransport";
import Company from "./transport/consts/Company";
import ITransportFactory from "./transport/interfaces/ITransportFactory";

const currentCompany = Company.LIME;
let factory! : ITransportFactory;

switch (currentCompany) {
    case Company.UBER:
        factory = new UberTransport();
        break;
    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
    case Company.LIME:
        factory = new LimeTransport();
        break;
    default:
        console.log("Companhia não definida!");
        break;
}

const client = new Client(factory);
client.startRoute();