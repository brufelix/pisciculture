import { Component } from '@angular/core';

import { Form } from '../../form';
import { Service } from 'src/app/services';
import { PeriodicElement } from '../table/table.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    constructor(private service: Service, private router: Router) { }

    periodo = ["Manhã", "Tarde", "Noite",];

    model = new Form(10, '', "", '', "", "");

    submitted = false;

    onSubmit() {
        const newData: PeriodicElement = {
            tem: this.model.temperatura,
            ph: +this.model.ph,
            qtdracao: +this.model.qtdracao,
            periodo: this.model.periodo,
            data: this.model.data,
            editando: false
        }
        this.service.createData(newData).subscribe(data => {
            console.log(data)
        });
        this.submitted = true;
        this.router.navigate(["/"])
    }

    get diagnostic() { return JSON.stringify(this.model); }

    showFormControls(form: any) {
        return form && form.controls['name'] &&
            form.controls['name'].value;
    }

}
