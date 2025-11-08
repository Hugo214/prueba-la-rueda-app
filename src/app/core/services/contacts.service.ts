import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  private api = environment.apiBase;

  constructor(private http: HttpClient) {}

  list(q = '', page = 1, per_page = 10): Observable<any> {
    let params = new HttpParams()
      .set('page', page)
      .set('per_page', per_page);
    if (q) params = params.set('q', q);
    return this.http.get(`${this.api}/contacts`, { params });
  }

  create(contact: Contact): Observable<any> {
    return this.http.post(`${this.api}/contacts`, contact);
  }

  bulk(rows: Contact[]): Observable<any> {
    return this.http.post(`${this.api}/contacts/bulk`, { rows });
  }
}
