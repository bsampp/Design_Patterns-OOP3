import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Avião iniciando decolagem...");
    }
    getCargo(): void {
        console.log("Avião: passageiros embarcados!");
    }
    checkWind(): void {
        console.log("Avião: ventos a 25km, ok!");
    }

}