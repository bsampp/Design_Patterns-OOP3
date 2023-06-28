import { Bread } from "../components/Bread";
import { Salad } from "../components/Salad";
import { SanduicheType } from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import { Protein } from "../components/protein";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private _sanduiche = new Sanduiche();

    reset(): void {
        this._sanduiche = new Sanduiche()
    }
    getSanduiche(): Sanduiche {
        const result: Sanduiche = this._sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(value: SanduicheType) {
        this._sanduiche.sanduicheType = value;
    }
    setBread(value: Bread) {
        this._sanduiche.bread = value;
    }
    setProtein(value: Protein) {
        this._sanduiche.protein = value;
    }
    setSalad(value: Salad) {
        this._sanduiche.salad = value;
    }
    addSauce(sauce: Sauce) {
        this._sanduiche.addSauce(sauce);
    }

}