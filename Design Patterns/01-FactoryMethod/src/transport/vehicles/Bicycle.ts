import IVehicle from "./interface/IVehicle";

export default class Bicycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bicicleta: iniciando trajeto...");
    }
    getCargo(): void {
        console.log("Bicicleta: Dando grau!");
    }

}