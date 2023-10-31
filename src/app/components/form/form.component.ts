import { Component } from '@angular/core';

import { Form } from '../../form';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {

    powers = ["Manhã", "Tarde", "Noite",];

    model = new Form(18, '180 Graus', "10/12/2023", '3', "10/12/2023", "Manhã");

    submitted = false;

    onSubmit() { this.submitted = true; }

    get diagnostic() { return JSON.stringify(this.model); }

    showFormControls(form: any) {
        return form && form.controls['name'] &&
            form.controls['name'].value;
    }


}
