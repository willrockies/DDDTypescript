
import Customer from "../../customer/entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";

import OrderService from "./order.service";

describe("Order service unit tests", () => {
  it("Should place an order", () => {

    //arrange
    const customer = new Customer("c1", "Customer 1");
    const item1 = new OrderItem("i1", "item 1", 10, "p1", 1);

    //act
    const order = OrderService.placeOrder(customer, [item1]);

    //assert
    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);

  });

  it("Should get total of all orders", () => {

    //arrange
    const item1 = new OrderItem("i1", "item1", 100, "p1", 1);
    const item2 = new OrderItem("i2", "item2", 200, "p2", 2);

    const order = new Order("o1", "c1", [item1]);
    const order2 = new Order("o2", "c2", [item2]);

    //act
    const total = OrderService.getTotal([order, order2])

    //assert
    expect(total).toBe(500);

  });
});