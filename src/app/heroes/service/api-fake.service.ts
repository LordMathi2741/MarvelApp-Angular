import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ApiFakeService {
  private apiKey: string = 'c9987fb31c852007b5b445e3a276eedb';
  private privateKey: string = 'a11c29b1458e1af19e1a8879362651f5df5ad9c0';
  private ts: string = new Date().getTime().toString();
  private hash: string = CryptoJS.MD5(this.ts + this.privateKey + this.apiKey).toString();
  private urlApi: string = `http://gateway.marvel.com/v1/public/characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}&limit=100`;
  constructor(private http:HttpClient) { }

  getHeroes():Observable<any>{
    return this.http.get(this.urlApi);
  }
}
