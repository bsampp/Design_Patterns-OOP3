import Token from "../utils/Token";
import IPayoneerPayment from "./IPayoneerPayment";

export default class Payoneer implements IPayoneerPayment{
    private token = new Token();

    authToken(): Token {
        return new  Token();
    }
    payoneerPayment(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token);
        console.log("Enviando pagamento via payoneer");
    }
    payoneerReceive(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token);
        console.log("Recebendo pagamento via payoneer");
    }

}
