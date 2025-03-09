import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {Skill, Experience, Contact, Reference, Education, Hobie, Language, Header} from './dto_interfaces';

@Injectable({
  providedIn: 'root',
})
export class Service_frontend {
  private apiUrl = 'http://localhost:3333';

  constructor(private http: HttpClient, private toast_error: ToastrService) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client error: ${error.message}`;
    } else {
      errorMessage = `Server error: ${error.message}`;
    }

    this.toast_error.error(errorMessage, 'API Error', {
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-bottom-right',
      tapToDismiss: false
    });

    return throwError(() => new Error(errorMessage));
  }

  getHeader(): Observable<Header[]> {
    return this.http.get<Header[]>(`${this.apiUrl}/header`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiUrl}/education`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/contact`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiUrl}/experience`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getHobbies(): Observable<Hobie[]> {
    return this.http.get<Hobie[]>(`${this.apiUrl}/hobie`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getLanguage(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.apiUrl}/language`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getReference(): Observable<Reference[]> {
    return this.http.get<Reference[]>(`${this.apiUrl}/reference`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/skill`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

}
