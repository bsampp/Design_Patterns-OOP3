import IDatabaseAcess from "./IDatabaseAccess";

export default class MongoDB implements IDatabaseAcess {
    connect(): void {
        console.log('MongoDB: Conectando ao banco de dados...');
    }
    query(): void {
        console.log('MongoDB: Realizando consulta...');
    }
    disconnect(): void {
        console.log('MongoDB: Desconectando do banco de dados...');
    }
}