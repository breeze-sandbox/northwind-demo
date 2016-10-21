import { EntityBase } from './entity-base';
import { TimeGroup } from './time-group';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class TimeLimit extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// </code>

    // Generated code. Do not place code below this line.
    id: number;
    maxTime: Date;
    minTime: Date;
    timeGroupId: number;
    timeGroup: TimeGroup;
}

