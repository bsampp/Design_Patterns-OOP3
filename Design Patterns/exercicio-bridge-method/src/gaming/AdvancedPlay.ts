import Play from "./Play";
import IConsole from "../consoles/IConsole"

export default class AdvancedPlay extends Play{
    constructor(console: IConsole){
        super(console);
    }

    challenge(){
        console.log("Desafio ativado.")
    }
}