import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable, shareReplay, take } from 'rxjs';
import { Transactions } from '../shared/models/transactions';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private API = 'http://localhost:3000/items';

  items$?: Observable<Transactions[]>;

  constructor(private http: HttpClient) {}

  /*List all transactions */
  getAll(): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(this.API).pipe(take(1), shareReplay());
  }

  /*Get transaction by ID */
  getByID(id: string) {
    return this.http.get<Transactions>(`${this.API}/${id}`);
  }

  /*Create new transaction*/
  create(transaction: {}): Observable<{}> {
    return this.http.post(this.API, transaction).pipe(map((obj) => obj));
  }

  /*Update transaction */
  update(id: any, data: any) {
    return this.http.put(`${this.API}/${id}`, data).pipe(map((obj) => obj));
  }

  /*Verifica o tipo selecionado*/
  checkTransactionType(type: any) {
    if (type === 'entrada') {
      console.log('escolheu ENTRADA', type);
    } else if (type === 'saida') {
      console.log('escolheu SAIDA', type);
    }
  }

  /*realiza a operação de acordo com tipo selecionado*/

  calculate(type: any, currentValue: number, inputValue: number) {
    if (type === 'entrada') {
      currentValue + inputValue;
    } else if (type === 'saida') {
      currentValue - inputValue;
    } else {
      return;
    }
  }
}
