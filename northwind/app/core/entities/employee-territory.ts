import { EntityBase } from './entity-base';
import { Employee } from './employee';
import { Territory } from './territory';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class EmployeeTerritory extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// </code>

    // Generated code. Do not place code below this line.
    iD: number;
    employeeID: number;
    territoryID: number;
    rowVersion: number;
    employee: Employee;
    territory: Territory;
}

