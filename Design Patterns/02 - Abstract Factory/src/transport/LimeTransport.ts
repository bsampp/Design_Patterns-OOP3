import Drone from "../vehicles/aerial/Drone";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Scooter from "../vehicles/land/Scooter";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicles";
import ITransportFactory from "./interfaces/ITransportFactory";
import UberTransport from "./UberTransport";
import NineNineTransport from "./NineNineTransport";

export default class LimeTransport implements ITransportFactory {
    createTransportVehicle(): ILandVehicle {
        return new Scooter();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
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
