import ILandVehicle from "./interfaces/ILandVehicles";

export default class Motorcycle implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: iniciando a entrega...");
    }
    getCargo(): void {
        console.log("Moto: encomenda retirada!");
    }

}