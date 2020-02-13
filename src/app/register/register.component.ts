import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;
  data: any;

  constructor(private formBuilder: FormBuilder, public router: Router, public route: ActivatedRoute) { }

  onSubmit() {
    let data: any = this.registerForm.value;

    alert('Form Submitted!! View Details?');
    this.router.navigate(['./login'],
      {
        queryParams: { "data": JSON.stringify(data) }
      })
      this.registerForm.reset();
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
    'Active': ['',Validators.required]
});
  }
}


