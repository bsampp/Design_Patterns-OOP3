import IDatabaseAccess from "../strategies/IDatabaseAccess";

export default class DataManager {
    private _databaseStrategy: IDatabaseAccess;

    constructor(databaseStrategy: IDatabaseAccess) {
        this._databaseStrategy = databaseStrategy;
    }

    setStrategy(strategy: IDatabaseAccess): void {
        this._databaseStrategy = strategy;
    }
    
      getData(): void {
        this._databaseStrategy.connect();
        const result = this._databaseStrategy.query();
        this._databaseStrategy.disconnect();
        console.log('DataManager: Dados obtidos com sucesso!');
    }
}