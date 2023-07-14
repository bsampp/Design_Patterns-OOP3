import database from "../server/Database";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware {
    public check(email: string, password: string){
        if (email.indexOf("@") === -1) {
            console.log("Email inválido");
            return false;
        }

        const verifyEmail = database.filter((item) => item.email === email);
        if (!verifyEmail.length) {
            console.log("Email não cadastrado");
            return false;
        }

        const verifyPassword = database.filter((item) => item.password === password);
        if (!verifyPassword.length) {
            console.log("Senha inválida");
            return false;
        }

        return this.checkNext(email, password);

    }
}
