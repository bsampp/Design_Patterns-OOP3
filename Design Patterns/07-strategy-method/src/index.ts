import DataManager from "./context/DataManager";
import MongoDB from "./strategies/MongoDB";
import MySQL from "./strategies/MySQL";

const dataManager = new DataManager(new MySQL());

dataManager.getData();


dataManager.setStrategy(new MongoDB());