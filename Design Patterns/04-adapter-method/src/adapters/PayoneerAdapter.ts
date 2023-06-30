import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPayPalPayment{
    private token: Token;

    constructor(private payoneer: Payoneer){
        console.log("Adaptando payoneer no paypal");
    }

    authToken(): Token {    
        return new Token();    
    }
    paypalPayment(): void {
        return this.payoneer.payoneerPayment();
    }
    paypalReceive(): void {
        return this.payoneer.payoneerReceive();
    }

}