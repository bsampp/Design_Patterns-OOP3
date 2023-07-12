import IConsole from "./IConsole";

export default class Playstation implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Playstation: Jogo configurado.")
    }

    configureGame(): void {
        this.authToken();
        console.log("Playstation: Configurando...")
    }
    authToken(): void {
        console.log("Playstation: Autenticando sessão...")
    }

}