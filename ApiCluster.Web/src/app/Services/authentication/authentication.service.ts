import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';


import {AppConfigService} from '../appConfiguration/appConfig.service';
import { User } from "src/app/Models/User.model";

interface AuthResponse {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string,
    localId: string,
    registered?: boolean;
    
}

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  public User: User | undefined;

  private _token: string = "";
  private _expirationDate: Date | undefined;

  public get Token() {
    return this._token;
  }

  public get IsAuth(): boolean {
    return this.hasValidToken;
  }

  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    this.User = new User();
    let auth = this.getToken;

    this._expirationDate = auth.expireIn;
    this._token = auth.token;
  }

  login(email: string, password: string) {
    this.User = new User();
    
    return this.http.post<AuthResponse>(this.appConfig.signInWithPassword, {
        email: email,
        password: password,
        returnSecureToken: true,
    })

    
  }

  logout() {
    this.clearToken();
    this._token = "";
    this._expirationDate = new Date();
  }

  private get getToken(): any {
    let tokenObject = { token: this.Token, expireIn: this._expirationDate };
    var token = localStorage.getItem("auth_token");
    if (token == null) return false;

    return JSON.parse(token);
  }

  private get hasValidToken(): boolean {
    return (
      this._token != null &&
      this._token.length > 0 &&
      this._expirationDate != null
    );
  }

  private emitToken(token?: string): void {
    this._token = token || "XAasdlasdaosdo39924ldwoasd9asdasd0as";
    this._expirationDate = new Date("2021-12-31");

    this.storeToken();
  }

  private storeToken(): void {
    let tokenObject = { token: this.Token, expireIn: this._expirationDate };
    localStorage.setItem("auth_token", JSON.stringify(tokenObject));
  }

  private clearToken(): void {
    localStorage.removeItem("auth_token");
  }
}
