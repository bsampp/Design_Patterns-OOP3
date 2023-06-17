export enum TipoTelefone {
  Residencial = "Residencial",
  Comercial = "Comercial",
  Celular = "Celular",
}

export class Telefone {
  private _ddd: string;
  private _numero: number;
  private _tipo: TipoTelefone;

  constructor(ddd: string, numero: number, tipo: TipoTelefone) {
    this._ddd = ddd;
    this._numero = numero;
    this._tipo = tipo;
  }

   
  public get ddd() : string {
    return this._ddd;
  }
  
  public get numero() : number {
    return this._numero;
  }
  
  public get tipo() : TipoTelefone {
    return this._tipo;
  }

  public set ddd(ddd: string){
    this._ddd = ddd;
  }

  public set numero(numero: number){
    this._numero = numero;
  }

  public set tipo(tipo: TipoTelefone){
    this._tipo = tipo;
  }

}
