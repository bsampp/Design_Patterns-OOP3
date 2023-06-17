export class Produto {
  private _codigo: number;
  private _descricao: string;
  private _valor: number;

  constructor(codigo: number, descricao: string, valor: number) {
    this._codigo = codigo;
    this._descricao = descricao;
    this._valor = valor;
  }

  public get codigo(): number {
    return this._codigo;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public get valor(): number {
    return this._valor;
  }

  public set codigo(codigo: number) {
    this._codigo = codigo;
  }

  public set descricao(descricao: string) {
    this._descricao = descricao;
  }

  public set valor(valor: number) {
    this._valor = valor;
  }
}
