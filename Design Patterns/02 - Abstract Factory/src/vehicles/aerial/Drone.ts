import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: iniciando decolagem...");
    }
    getCargo(): void {
        console.log("Drone: Encomenda retirada!");
    }
    checkWind(): void {
        console.log("Drone: Ventos a 25km, ok!");
    }
}