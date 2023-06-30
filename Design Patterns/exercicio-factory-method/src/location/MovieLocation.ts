import Location from "./Location";
import Movie from "./itens/Movie";
import Iitens from "./itens/interface/Iitens";

export default class MovieLocation extends Location{
    createItem(): Iitens{
        return new Movie();
    }
}