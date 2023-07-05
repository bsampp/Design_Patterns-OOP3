import ICorreio from "../correio/ICorreio";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreio{

    constructor(private transportadora: Transportadora){
        console.log("Adaptando transportadora.")
    }

    sendCorreio(): void {
        return this.transportadora.sendTransportadora();
    }
    receiveCorreio(): void {
        return this.transportadora.receiveTransportadora()
    }
}