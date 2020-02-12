import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Details } from '../register/Detail';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
    data: any;
    registerForm: FormGroup;
    public detail: Details[] = [];
    public allowCustom: boolean = true;
    dataItem: any;

    constructor(private formBuilder: FormBuilder,public router: Router, public route: ActivatedRoute) {
    }
  
    public addHandler({ sender }) {
      let detail = new Details();
      console.log('detail: ', detail);
      let registerForm = this.createFormGroup();
      sender.addRow(registerForm);
  
    }

    public createFormGroup( ): FormGroup {
        return this.formBuilder.group({

            'Name': [this.data.Name, Validators.required],
            'MobileNo': [this.data.Name, Validators.required],
            'DOB': [this.data.Name, Validators.required],
            'DOJ': [this.data.Name, Validators.required],
            'BoodGroup': [this.data.Name, Validators.required],
            'EmergencyNo': [this.data.Name, Validators.required],
            'Address': [this.data.Name,Validators.required],
            'PANNo': [this.data.Name, Validators.required],
            'BankAccountNo': [this.data.Name, Validators.required],
            'BankName': [this.data.Name,Validators.required],
            'IFSCCode': [this.data.Name, Validators.required],
            'EmailID': [this.data.Name, Validators.required],
            'Active': [this.data.Name, Validators.required],
        });
    }

    public ngOnInit(): void {
        
            this.route.queryParams.subscribe((params) => {
              const data = JSON.parse(params["data"]);
              console.log(params);
            });
          }

    }