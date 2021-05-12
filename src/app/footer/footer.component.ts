import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { DataServicesService } from 'src/app/data-services.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

   dateY: Date = new Date();

   title: string = 'Authenic Africa';

   models = false;

  constructor(private formBuilder: FormBuilder, private dataServices: DataServicesService, private router:Router) { }

  addSubscribe!: FormGroup;

  ngOnInit(): void {
   this.SubscribeValidation();
  }

  SubscribeValidation() {
    this.addSubscribe = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]]
    })
  }

  onSubmit()
  {
    this.models = true;
    if (this.addSubscribe.invalid) {
      this.SubscribeValidation();
      return;
    } 
    else{
      // console.log(this.addSubscribe.value);

      this.dataServices.createPost(this.addSubscribe.value).subscribe((data)=>{
        console.log(data);
        // this.router.navigate(['/about']);
      })

    }
  }

  get a() {
    return this.addSubscribe.controls;
  }
 
}
