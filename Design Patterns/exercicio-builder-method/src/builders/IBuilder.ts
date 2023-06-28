import Sanduiche from "../products/Sanduiche"
import { SanduicheType } from "../components/SanduicheType";
import {Bread} from "../components/Bread";
import { Protein } from "../components/protein";
import { Salad } from "../components/Salad";
import Sauce from "../components/Sauce";

export default interface IBuilder{
    reset(): void;
    getSanduiche(): Sanduiche;
    setSanduicheType(value: SanduicheType);
    setBread(value: Bread);
    setProtein(value: Protein);
    setSalad(value: Salad);
    addSauce(sauce: Sauce);
}