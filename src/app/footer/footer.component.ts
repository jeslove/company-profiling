import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

   dateY: Date = new Date();

   title: string = 'Authenic Africa';

  constructor() { }

  ngOnInit(): void {
  }

}
