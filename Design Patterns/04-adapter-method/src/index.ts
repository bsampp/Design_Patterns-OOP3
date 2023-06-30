import PayoneerAdapter from "./adapters/PayoneerAdapter";
import Payoneer from "./payoneer/Payoneer";
import IPayPalPayment from "./paypal/IPayPalPayment";



const payment: IPayPalPayment = new PayoneerAdapter(new Payoneer());
payment.paypalPayment();
payment.paypalReceive();