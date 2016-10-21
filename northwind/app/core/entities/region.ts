import { EntityBase } from './entity-base';
import { Territory } from './territory';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class Region extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// </code>

    // Generated code. Do not place code below this line.
    regionID: number;
    regionDescription: string;
    rowVersion: number;
    territories: Territory[];
}

