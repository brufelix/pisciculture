import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PeriodicElement } from '../components/table/table.component';

@Injectable({
    providedIn: 'root'
})
export class Service {
    private baseUrl = 'http://localhost:9000';

    constructor(private http: HttpClient) { }

    getUrlBase() {
        return this.baseUrl
    }

    getData(): Observable<PeriodicElement[]> {
        return this.http.get<PeriodicElement[]>(`${this.baseUrl}/data`);
    }

    createData(data: PeriodicElement): Observable<PeriodicElement> {
        const id = Math.floor(Math.random() * (2000 + 1)) - 1000;

        return this.http.post<PeriodicElement>(`${this.baseUrl}/data`, { ...data, id: Math.abs(id) });
    }

    remove(id: string) {
        this.http.delete<any>(this.baseUrl + "/data/" + id).subscribe((data) => {
            console.log(data)
            console.log("success");
        });
    }

    edit(data: PeriodicElement): Observable<PeriodicElement> {
        return this.http.put<PeriodicElement>(`${this.baseUrl}/data/${data.id}`, data)
    }
}
