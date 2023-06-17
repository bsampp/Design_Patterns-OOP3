import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Car from "../vehicles/land/Car";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicles";
import ITransportFactory from "./interfaces/ITransportFactory";
import Airplane from "../vehicles/aerial/Airplane";

export default class UberTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Car();   
    }
    createTransportAircraft(): IAircraft {
        return new Airplane();
    }

}