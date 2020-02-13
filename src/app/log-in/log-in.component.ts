import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  data: any;
  registerForm: FormGroup;
  public allowCustom: boolean = true;

  constructor(private formBuilder: FormBuilder, public router: Router, public route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      'Name': ['', Validators.required],
      'MobileNo': ['', Validators.required],
      'DOB': ['', Validators.required],
      'BloodGroup': ['', Validators.required],
      'ECN': ['', Validators.required],
      'Address': ['', Validators.required],
      'PANNo': ['', Validators.required],
      'BAN': ['', Validators.required],
      'BankName': ['', Validators.required],
      'IFSC': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'Active': ['', Validators.required]
    });

    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.data = JSON.parse(params.data);
    });
  }
}