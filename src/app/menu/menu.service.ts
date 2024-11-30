import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl = 'https://qrbackend-production.up.railway.app/menu'; // Your backend API URL

  constructor(private http: HttpClient) {}

  // Get the menu data
  getMenu(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
