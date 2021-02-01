import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    
    public signInWithPassword = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvH8uUB29zEHk8J_spSlrtQg17ERCce_I";
    
    constructor() {[
        
    ]}
}