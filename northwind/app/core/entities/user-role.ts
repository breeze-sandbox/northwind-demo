import { EntityBase } from './entity-base';
import { Role } from './role';
import { User } from './user';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class UserRole extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// </code>

    // Generated code. Do not place code below this line.
    iD: number;
    userId: number;
    roleId: number;
    role: Role;
    user: User;
}

