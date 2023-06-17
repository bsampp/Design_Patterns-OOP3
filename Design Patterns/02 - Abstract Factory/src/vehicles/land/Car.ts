import ILandVehicle from "./interfaces/ILandVehicles";

export default class Car implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro iniciando o trajeto");
    }
    getCargo(): void {
        console.log("Carro: Passageiros embarcados!");
    }

}