export default interface IDatabaseAccess {
    connect(): void;
    query(): void;
    disconnect(): void;
}