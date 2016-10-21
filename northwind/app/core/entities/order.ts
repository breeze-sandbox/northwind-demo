import { EntityBase } from './entity-base';
import { Customer } from './customer';
import { Employee } from './employee';
import { InternationalOrder } from './international-order';
import { OrderDetail } from './order-detail';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class Order extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// </code>

    // Generated code. Do not place code below this line.
    orderID: number;
    customerID: string;
    employeeID: number;
    orderDate: Date;
    requiredDate: Date;
    shippedDate: Date;
    freight: number;
    shipName: string;
    shipAddress: string;
    shipCity: string;
    shipRegion: string;
    shipPostalCode: string;
    shipCountry: string;
    rowVersion: number;
    customer: Customer;
    employee: Employee;
    internationalOrder: InternationalOrder;
    orderDetails: OrderDetail[];
}

