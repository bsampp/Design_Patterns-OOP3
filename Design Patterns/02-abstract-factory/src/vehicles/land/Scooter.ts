import ILandVehicle from "./interfaces/ILandVehicles";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Scooter iniciando o trajeto");
    }
    getCargo(): void {
        console.log("Scooter: Passageiros embarcados!");
    }
}