import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import ICorreio from "./correio/ICorreio";
import Correio from "./correio/Correio";
import Transportadora from "./transportadora/Transportadora";

const entrega2: Correio = new Correio();
entrega2.sendCorreio();
entrega2.receiveCorreio();

const entrega: ICorreio = new TransportadoraAdapter(new Transportadora())

entrega.sendCorreio();
entrega.receiveCorreio();