import { Cliente } from './Cliente';
import { Sexo } from './Cliente';
import { Endereco } from './Endereco';
import { Produto } from './Produto';
import { Telefone } from './Telefone';
import { TipoTelefone } from './Telefone';
import { Venda } from './Venda';

let endereco1 = new Endereco("Rua A", 216, "Guarapuava", "Paraná");
let telefone1 = new Telefone("42", 998610755, TipoTelefone.Celular);
let telefone2 = new Telefone("42", 33033215, TipoTelefone.Residencial);
let cliente1 = new Cliente("Bruno", 75356985112, 26112002, Sexo.Masculino,endereco1, [telefone1, telefone2]);
let produto1 = new Produto(1, "Água", 5.99);
let produto2 = new Produto(2, "Chocolate", 13.99);
let venda1 = new Venda(1, 3062023, cliente1,[produto1, produto2]);

console.log(venda1.calcularTotal());
