import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Student } from './student';
import {  Observable } from 'rxjs';

@Injectable()
export class EnrollmentService {

    
    
    constructor(private http: HttpClient) { }
    getStudents(url:string) {
        return this.http.get(url);
        // .catch(this.errorHandler);
    }

    newStudents(url: string, model: any) {
        return this.http.post(url, model)
            .map((res: Response) => res.json());
    }
    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "server error");

    }
}
