import Location from "./Location";
import Game from "./itens/Game";
import Iitens from "./itens/interface/Iitens";

export default class GameLocation extends Location{
    protected createItem(): Iitens{
        return new Game();
    }
}