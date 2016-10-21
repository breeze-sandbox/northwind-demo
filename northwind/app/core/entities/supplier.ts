import { EntityBase } from './entity-base';
import { Location } from './location';
import { Product } from './product';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class Supplier extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// </code>

    // Generated code. Do not place code below this line.
    supplierID: number;
    companyName: string;
    contactName: string;
    contactTitle: string;
    location: Location;
    phone: string;
    fax: string;
    homePage: string;
    rowVersion: number;
    products: Product[];
}

