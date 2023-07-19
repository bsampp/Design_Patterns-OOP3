import Middleware from "./Middleware";

export default class CheckWeakPasswordMiddleware extends Middleware {
    public check(email: string, password: string){
        if (password.length < 6) {
            console.log("Senha fraca");
            return false;
        }

        console.log("Senha forte");
        return this.checkNext(email, password);
    }
}