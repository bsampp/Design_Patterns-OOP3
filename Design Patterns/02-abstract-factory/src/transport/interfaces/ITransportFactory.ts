import ILandVehicle from "../../vehicles/land/interfaces/ILandVehicles";
import IAircraft from "../../vehicles/aerial/interfaces/IAircraft";
import UberTransport from "../UberTransport";
import NineNineTransport from "../NineNineTransport";
import LimeTransport from "../LimeTransport";

export default interface ITransportFactory{
    createTransportVehicle(): ILandVehicle;
    createTransportAircraft(): IAircraft;
    createUberTransport(): UberTransport;
    createNineNineTransport(): NineNineTransport;
    createLimeTransport(): LimeTransport;
}