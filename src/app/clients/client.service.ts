import { Injectable } from '@angular/core';
import { CLIENTS } from './clients.json';
import { Client } from './client';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class ClientService {

  constructor() { }

  getClients(): Observable<Client[]>{
    return of(CLIENTS);
  }
}
