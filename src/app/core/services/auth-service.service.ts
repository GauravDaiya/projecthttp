import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = environment.authApiUrl;
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.get<any []>(`${this.baseUrl}?email=${email}&password=${password}`).pipe(
      tap(users => {
        if (users.length) {
          localStorage.setItem(this.tokenKey, users[0].token);
        }
      })
    )
  }

  hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
