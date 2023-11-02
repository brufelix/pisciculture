import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../components/table/table.component';

@Injectable({
    providedIn: 'root'
})
export class Service {
    private baseUrl = 'https://api-mock-nine.vercel.app';

    constructor(private http: HttpClient) { }

    getData(): Observable<PeriodicElement[]> {
        return this.http.get<PeriodicElement[]>(`${this.baseUrl}/data`);
    }

    createData(data: PeriodicElement): Observable<PeriodicElement> {
        const id = Math.floor(Math.random() * (2000 + 1)) - 1000;

        return this.http.post<PeriodicElement>(`${this.baseUrl}/data`, { ...data, id: Math.abs(id) });
    }
}
