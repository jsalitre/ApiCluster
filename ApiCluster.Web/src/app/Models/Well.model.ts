export class Well {
    title: string = "";
    message: string = "";
    odd: boolean = false;
    resource:string = ""
    linkTitle: string = "";
    routeLink: string = "";

    constructor(title:string, message?:string, odd?: boolean, resource?:string, linkText?:string, routeLink?: string) {
        this.title= title; 
        this.message = message || "";
        this.odd = odd || false;
        this.resource = resource || "";
        this.linkTitle = linkText || "";
        this.routeLink = routeLink || ""; 
    }

};