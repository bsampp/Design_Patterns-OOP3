import ILandVehicle from "../../vehicles/land/interfaces/ILandVehicles";
import IAircraft from "../../vehicles/aerial/interfaces/IAircraft"

export default interface ITransportFactory{
    createTransportVehicle(): ILandVehicle;
    createTransportAircraft(): IAircraft;
}