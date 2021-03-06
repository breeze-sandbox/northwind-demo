import { EntityBase } from './entity-base';
import { Product } from './product';
import { Order } from './order';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class OrderDetail extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// </code>

    // Generated code. Do not place code below this line.
    orderID: number;
    productID: number;
    unitPrice: number;
    quantity: number;
    discount: number;
    rowVersion: number;
    order: Order;
    product: Product;
}

