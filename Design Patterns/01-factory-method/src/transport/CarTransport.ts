import Transport from "./Transport";
import IVehicle from "./vehicles/interface/IVehicle";
import Car from "./vehicles/Car";


export default class CarTransport extends Transport{

    protected createTransport(): IVehicle {
        return new Car();
    }

}