import Iitens from "./itens/interface/Iitens";

export default abstract class Location{
    startItem(): void{
        const item = this.createItem();
        item.start();
    }

    protected abstract createItem(): Iitens;
}