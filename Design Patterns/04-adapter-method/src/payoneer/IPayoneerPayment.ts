import Token from "../utils/Token";

export default interface IPayoneerPayment{
    authToken(): Token;
    payoneerPayment(): void;
    payoneerReceive(): void;
}