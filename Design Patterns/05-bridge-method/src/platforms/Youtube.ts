import IPlatform from "./IPlatform";

export default class Youtube implements IPlatform{
    
    constructor(){
        this.configureRMTP();
        console.log("Youtube: plataforma configurada.")
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Youtube: configurando broadcasting...");
    }
    authToken(): void {
        console.log("Youtube: autenticando token...");
    }

}