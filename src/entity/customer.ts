// 
/**
 * Complexidade acidental - resolve problema de banco de dados
 * infraestrutura - mundo externo 
 * entity / model
 * -entity
 * -- customer.ts (get, set)
 * ORM - entidade(model) focado em persistencia dados
 */

/**
 * complexidade de negocio - regra de negocio
 * dominio - entidade focado em negocio
 * - entity
 *  --customer.ts(regra de negocio)
 */
import Address from './address'
export default class Customer {
  _id: string;
  _name: string = "";
  //_address: string = ""; // atributo sem expressividade, tipo primario
  _address!: Address;
  _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  //  enquanto aqui estou aplicado retorno de dado
  /* get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  } */

  //entidade sempre vai se autovalidar
  validate() {
    if (this._name.length === 0) {
      throw new Error('Name is required');
    }
    if (this._id.length === 0) {
      throw new Error('Id is required');
    }
  }

  /*aqui estou aplicando de regra de negocio */
  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (this._address === undefined) {
      throw new Error('the address is mandatory to active a customer')
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
  set Address(address: Address) {
    this._address = address; 
  }
}

let customer = new Customer("123", "");
console.log(customer);