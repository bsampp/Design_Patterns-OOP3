import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export enum Sexo {
  Masculino = "Masculino",
  Feminino = "Feminino",
  Outro = "Indefinido",
}

export class Cliente {
  private _nome: string;
  private _cpf: number;
  private _dataNascimento: number;
  private _sexo: Sexo;
  private _endereco: Endereco;
  private _telefones: Telefone[];


  constructor(
    nome: string,
    cpf: number,
    dataNascimento: number,
    sexo: Sexo,
    endereco: Endereco,
    telefones: Telefone[]
  ) {
    this._nome = nome;
    this._cpf = cpf;
    this._dataNascimento = dataNascimento;
    this._sexo = sexo;
    this._endereco = endereco;
    this._telefones = telefones;
  }

  public get nome(): string {
    return this._nome;
  }

  public get cpf(): number {
    return this._cpf;
  }

  public get dataNascimento(): number {
    return this._dataNascimento;
  }

  public get sexo(): Sexo {
    return this._sexo;
  }

  public get endereco(): Endereco {
    return this._endereco;
  }

  public get telefones(): Telefone[] {
    return this._telefones;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public set cpf(cpf: number) {
    this._cpf = cpf;
  } 

  public set dataNascimento(dataNascimento: number) {
    this._dataNascimento = dataNascimento;
  }

  public set sexo(sexo: Sexo) {
    this._sexo = sexo;
  }

  public set endereco(endereco: Endereco){
    this._endereco = endereco;
  }

  public set telefones(telefones: Telefone[]){
    this._telefones = telefones
  }
}
