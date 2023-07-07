import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform{
    
    constructor(){
        this.configureRMTP();
        console.log("Facebook Live: plataforma configurada.") 
    }
    
    configureRMTP(): void {
        this.authToken();
        console.log("Facebook Live: configurando broadcasting...");
    }
    authToken(): void {
        console.log("Facebook Live: autenticando token...");
    }
}