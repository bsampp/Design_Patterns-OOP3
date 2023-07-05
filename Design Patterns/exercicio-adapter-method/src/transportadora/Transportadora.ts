import ITransportadora from "./ITransportadora";


export default class Transportadora implements ITransportadora{
    sendTransportadora() {
        console.log("Enviando entrega via transportadora");
    }
    receiveTransportadora() {
        console.log("Recebendo entrega via transportadora");
    }
    
}