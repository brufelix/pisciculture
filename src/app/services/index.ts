import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../components/table/table.component';

@Injectable({
    providedIn: 'root'
})
export class Service {
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        return this.http.get(`${this.baseUrl}/data`);
    }

    createData(data: PeriodicElement): Observable<any> {
        const id = Math.floor(Math.random() * (2000 + 1)) - 1000;

        return this.http.post(`${this.baseUrl}/data`, { ...data, id: Math.abs(id) });
    }
}
