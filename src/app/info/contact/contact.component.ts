import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { DataServicesService } from 'src/app/data-services.service';
import {  faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private dataServices: DataServicesService, private router:Router) { }

  addContact!: FormGroup;

  responseMessage:any;

  models = false;

  faCoffee =faPhone;
  faemail = faEnvelope;
  faLocal = faLocationArrow

  ngOnInit(): void {
    Aos.init();

    this.SubscribeValidation();
  }

  onSubmitContact()
  {
    this.models = true;
    if (this.addContact.invalid)
    {
      this.SubscribeValidation();
      return;
    } 
    else
    {
      this.dataServices.createContact(this.addContact.value).subscribe((data)=>{
          this.responseMessage =data;
          // form.resetForm(); 
          this.addContact.reset();
      });
    }
  }

  SubscribeValidation() {
    this.addContact = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      subject:['',[Validators.required]],
      message:['',[Validators.required,Validators.minLength(15)]],
      fname:['',[Validators.required]]
    });
  }

  get ab() {
    return this.addContact.controls;
  }

}
