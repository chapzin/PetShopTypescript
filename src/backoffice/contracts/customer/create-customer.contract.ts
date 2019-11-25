import { Contract } from '../contract';
import { Flunt } from 'src/utils/flunt';
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../../dtos/create-customer-dto';

@Injectable()
export class CreateCustomerContract implements Contract {
  errors: any[];

  validate(model: CreateCustomerDto): boolean {
    const flunt = new Flunt();
    flunt.hasMinLen(model.name, 5, 'Nome invalido');
    flunt.isEmail(model.email, 'E-mail invalido');
    flunt.isFixedLen(model.document, 11, 'CPF invalido');
    flunt.hasMinLen(model.password, 6, 'Senha invalida');

    this.errors = flunt.errors;
    return flunt.isValid();
  }
}
