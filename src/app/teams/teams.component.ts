import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { DataServicesService } from '../data-services.service';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

 constructor(private dataServices: DataServicesService) { }

  product!:any;

  faCoffee =faBriefcase;

  ngOnInit(): void {
    Aos.init();
    this.proccessRequest();
  }

  proccessRequest()
  {
    this.dataServices.getTeams().subscribe((data)=>{
      this.product = data;
      // console.log(this.product);
    })
  }


}
