
import Customer from "../../../../domain/customer/entity/customer";
import CustomerRepositoryInterface from "../../../../domain/customer/repository/customer-repository.interface";
import Address from "../../../../domain/customer/value-object/address";
import CustomerModel from "./customer.model";

export default class CustomerRepository implements CustomerRepositoryInterface {

  async create(entity: Customer): Promise<void> {
    const address = new Address('Rua dois', 2, '12345-678', 'São Paulo');
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      street: address.street,
      number: address.number,
      zipcode: address.zip,
      city: address.city,
      active: entity.isActive(),
      rewardPoints: entity.rewardPoints,
    })
  }

  update(entity: Customer): Promise<void> {
    throw new Error("Method not implemented.");
  }
  find(id: string): Promise<Customer> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Customer[]> {
    throw new Error("Method not implemented.");
  }

}