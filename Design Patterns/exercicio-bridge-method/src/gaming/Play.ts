import IConsole from "../consoles/IConsole";
import IGaming from "./IGaming";

export default class Play implements IGaming{

    constructor(private console : IConsole){};

    playing(): void {
        console.log("Iniciando sessão...")
    }
    result(): void {
        console.log("********* Jogo iniciado *********");
    }

}