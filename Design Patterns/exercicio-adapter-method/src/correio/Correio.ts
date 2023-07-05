import ICorreio from "./ICorreio";

export default class Correio implements ICorreio{
    sendCorreio(): void {
        console.log("Enviando entrega via correio");
    }
    receiveCorreio(): void {
        console.log("Recebendo entrega via correio");
    }

}