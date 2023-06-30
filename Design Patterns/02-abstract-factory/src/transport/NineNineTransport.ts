import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Motorcycle from "../vehicles/land/Motorcycle";
import Helicopter from "../vehicles/aerial/Helicopter"
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicles";
import ITransportFactory from "./interfaces/ITransportFactory";
import UberTransport from "./UberTransport";
import LimeTransport from "./LimeTransport";

export default class NineNineTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Motorcycle();
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();    
    }

    createUberTransport(): UberTransport {
        return new UberTransport();
    }
    
    createNineNineTransport(): NineNineTransport {
        return new NineNineTransport();
    }

    createLimeTransport(): LimeTransport {
        return new LimeTransport();
    }

}