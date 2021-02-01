export class Well {
    title: string = "";
    message: string = "";
    odd: boolean = false;
    resource:string = ""
    linkTitle: string = "";
    routeLink: string = "";

    constructor() {
        
    }
    

    createNew(title: string, message?:string, odd?:boolean, resource?:string, linkText?:string, routeLink?:string) {
        var well = new Well();
        well.title = title;
        well.message = message || "";
        well.odd = odd || false;
        well.resource = resource || "";
        well.linkTitle = linkText || "";
        well.routeLink = routeLink || "";
        return well;
    }
};