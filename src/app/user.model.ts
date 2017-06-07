/**
 * User is a data-structure that holds an individual
 * record from The Github user API
 */

export class User {

    id: string;
    login: string;
    created_at: Date;
    avatar_url: string;
    name : string;

    constructor(obj?: any) {
        this.id              = obj && obj.id             || null;
        this.login           = obj && obj.login          || null;
        this.name            = obj && obj.name           || null;
        this.created_at      = obj && obj.created_at     || null;
        this.avatar_url      = obj && obj.avatar_url     || null;
    
     }

}
