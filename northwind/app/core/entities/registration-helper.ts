import { MetadataStore } from 'breeze-client';

import { Location } from './location';
import { Category } from './category';
import { Product } from './product';
import { Supplier } from './supplier';
import { Comment } from './comment';
import { Customer } from './customer';
import { Order } from './order';
import { Employee } from './employee';
import { EmployeeTerritory } from './employee-territory';
import { Territory } from './territory';
import { Region } from './region';
import { InternationalOrder } from './international-order';
import { OrderDetail } from './order-detail';
import { Geospatial } from './geospatial';
import { PreviousEmployee } from './previous-employee';
import { Role } from './role';
import { UserRole } from './user-role';
import { User } from './user';
import { TimeGroup } from './time-group';
import { TimeLimit } from './time-limit';
import { UnusualDate } from './unusual-date';

export class RegistrationHelper {

    static register(metadataStore: MetadataStore) {
        metadataStore.registerEntityTypeCtor('Location', Location);
        metadataStore.registerEntityTypeCtor('Category', Category);
        metadataStore.registerEntityTypeCtor('Product', Product);
        metadataStore.registerEntityTypeCtor('Supplier', Supplier);
        metadataStore.registerEntityTypeCtor('Comment', Comment);
        metadataStore.registerEntityTypeCtor('Customer', Customer);
        metadataStore.registerEntityTypeCtor('Order', Order);
        metadataStore.registerEntityTypeCtor('Employee', Employee);
        metadataStore.registerEntityTypeCtor('EmployeeTerritory', EmployeeTerritory);
        metadataStore.registerEntityTypeCtor('Territory', Territory);
        metadataStore.registerEntityTypeCtor('Region', Region);
        metadataStore.registerEntityTypeCtor('InternationalOrder', InternationalOrder);
        metadataStore.registerEntityTypeCtor('OrderDetail', OrderDetail);
        metadataStore.registerEntityTypeCtor('Geospatial', Geospatial);
        metadataStore.registerEntityTypeCtor('PreviousEmployee', PreviousEmployee);
        metadataStore.registerEntityTypeCtor('Role', Role);
        metadataStore.registerEntityTypeCtor('UserRole', UserRole);
        metadataStore.registerEntityTypeCtor('User', User);
        metadataStore.registerEntityTypeCtor('TimeGroup', TimeGroup);
        metadataStore.registerEntityTypeCtor('TimeLimit', TimeLimit);
        metadataStore.registerEntityTypeCtor('UnusualDate', UnusualDate);
    }
}
