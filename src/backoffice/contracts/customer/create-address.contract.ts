import { Contract } from '../contract';
import { Address } from 'src/backoffice/models/address.model';
import { Flunt } from 'src/utils/flunt';

export class CreateAddressContract implements Contract {
  errors: any[];
  validate(model: Address): boolean {
    const flunt = new Flunt();

    flunt.isFixedLen(model.zipCode, 8, 'CEP invalido!');
    flunt.hasMinLen(model.street, 3, 'Rua invalida');
    flunt.hasMinLen(model.neighbordhood, 3, 'Bairro invalido');
    flunt.hasMinLen(model.city, 3, 'Cidade invalida');
    flunt.isFixedLen(model.state, 2, 'Estado invalido');
    flunt.isFixedLen(model.country, 3, 'Pais invalido');

    this.errors = flunt.errors;
    return flunt.isValid();
  }
}
