import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { 
  }

  getRandomCharacter():any{
    const character=Math.floor(Math.random()*671);
    return this.http.get('https://rickandmortyapi.com/api/character/'+ character);
  }
}
