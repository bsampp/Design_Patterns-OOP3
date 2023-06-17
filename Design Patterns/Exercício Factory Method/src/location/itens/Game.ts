import Iitens from "./interface/Iitens";

export default class Game implements Iitens{
    start(): void{
        this.start();
        console.log("Jogo iniciando");
    }

    getDescription(): void {
        console.log("");
    }
}