import { Injectable } from '@angular/core';
import { CLIENTS } from './clients.json';
import { Client } from './client';

@Injectable()
export class ClientService {

  constructor() { }

  getClients(): Client[]{
    return CLIENTS;
  }
}
