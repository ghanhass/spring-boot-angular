import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8081/api/customers';

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, customer);
  }
  
  updateCustomer(id: number, customer: Object): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, customer);
  }
  //
  deleteCustomer(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  //
  getCustomersList(): Observable<Object>{
    return this.http.get( this.baseUrl );
  }
  //
  getCustomerByAge(age: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }
  //
  deleteAllCustomers(): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete`, {responseType: 'text'});
  }
  //
}