import { v4 as uuid } from 'uuid';

import Customer from '../../customer/entity/customer';
import Order from '../entity/order';
import OrderItem from '../entity/order_item';


export default class OrderService {

  static placeOrder(customer: Customer, items: OrderItem[]): Order {

    if (items.length === 0) {
      throw new Error("Order must have at least one item");
    }

    const order = new Order(uuid(), customer.id, items);
    customer.addRewardsPoint(order.total() / 2);
    return order;

  }

  static getTotal(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }
}