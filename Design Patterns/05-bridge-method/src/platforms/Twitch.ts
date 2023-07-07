import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform{
    
    constructor(){
        this.configureRMTP();
        console.log("Twitch: plataforma configurada.")
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: configurando broadcasting...");
    }
    authToken(): void {
        console.log("Twitch: autenticando token...");
    }
}