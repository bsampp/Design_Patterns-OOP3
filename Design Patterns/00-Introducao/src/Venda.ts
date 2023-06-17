import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

export class Venda {
  private _codigo: number;
  private _data: number;
  private _cliente: Cliente;
  private _produtos: Produto[];

  constructor(
    codigo: number,
    data: number,
    cliente: Cliente,
    produtos: Produto[]
  ) {
    this._codigo = codigo;
    this._data = data;
    this._cliente = cliente;
    this._produtos = produtos;
  }

  public get codigo(): number {
    return this._codigo;
  }

  public get data(): number {
    return this._data;
  }

  public get cliente(): Cliente {
    return this._cliente;
  }

  public get produtos(): Produto[] {
    return this._produtos;
  }

  public set codigo(codigo: number) {
    this._codigo = codigo;
  }

  public set data(data: number) {
    this._data = data;
  }

  public set cliente(cliente: Cliente) {
    this._cliente = cliente;
  }

  public set produtos(produtos: Produto[]) {
    this._produtos = produtos;
  }

  public calcularTotal(): number {
    let total = 0;
  
    for (const produto of this._produtos) {
      total += produto.valor;
    }
  
    return total;
  }
  
}
