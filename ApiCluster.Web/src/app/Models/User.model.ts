export class User {
    name: string = "";
    avatar: string = "";

    /**
     *
     */
    constructor(displayName?: string) {
        this.name = displayName || "";
    }
}