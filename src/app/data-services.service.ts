import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor() { }

  dataServices =[
    {id:1,name:'Andy Kofi Tekyi',possition:'Chief Executive Officer (CEO)',description:'Explicabo voluptatem mollitia et repellat qui dolorum quasi',
    ImageFile:'../../assets/team/team-1.jpg', 
    followers:[
      {socialMedia:'facebook',links:'https://m.facebook.com/positivomobile',iconslink:''},
      {socialMedia:'instergram',links:'https://www.instagram.com/positivo_inc/',iconslink:''},
      {socialMedia:'linkind',links:' https://www.linkedin.com/in/kofi-takyi-8b4478a4/',iconslink:''}
    ]},

    {id:2,name:'Frank Jeslove',possition:'Developer',description:'Explicabo voluptatem mollitia et repellat qui dolorum quasi',
    ImageFile:'../../assets/team/team-2.jpg', 
    followers:[
      {socialMedia:'facebook',links:'',iconslink:''},
      {socialMedia:'instergram',links:'',iconslink:''},
      {socialMedia:'linkind',links:'',iconslink:''}
    ]},

    {id:3,name:'Alexander AKA Shark Slayer',possition:'Chief Technology Officer (CTO)',description:'Explicabo voluptatem mollitia et repellat qui dolorum quasi',
    ImageFile:'../../assets/team/team-3.jpg', 
    followers:[
      {socialMedia:'facebook',links:'',iconslink:''},
      {socialMedia:'instergram',links:'',iconslink:''},
      {socialMedia:'linkind',links:'',iconslink:''}
    ]},

    {id:4,name:'Caleb Lasmonthy',possition:'Software Engineer',description:'Explicabo voluptatem mollitia et repellat qui dolorum quasi',
    ImageFile:'../../assets/team/team-4.jpg', 
    followers:[
      {socialMedia:'facebook',links:'',iconslink:''},
      {socialMedia:'instergram',links:'',iconslink:''},
      {socialMedia:'linkind',links:'',iconslink:''}
    ]},

    {id:5,name:'Woolf Kalime',possition:'Project Manager',description:'Explicabo voluptatem mollitia et repellat qui dolorum quasi',
    ImageFile:'../../assets/team/team-1.jpg',
    followers:[
      {socialMedia:'facebook',links:'',iconslink:'faCoffee'},
      {socialMedia:'instergram',links:'',iconslink:''},
      {socialMedia:'linkind',links:'',iconslink:''}
    ]}

  ]

 

  // Product List script data

  dataProjects =[

    {id:1,name:'School Management (ERP)',description:'The super school management for all schools',
    features:[
      {filename:'Teachers management'},
      {filename:'Parent management'},
      {filename:'Hr management'},
      {filename:'Student management'},
      {filename:'Accountent'},
      {filename:'Event management'},
      {filename:'Hostel management'}
    ],pathLinks:'https://erp.aptechghana.com/'},

    {id:2,name:'Rent Management',description:'The ultimate super one for all software for rents',
    features:[
      {filename:'Landlord management'},
      {filename:'Tenant management'},
      {filename:'Bill management'},
      {filename:'Reporting management'},
      {filename:'Accountent'},
      {filename:'Auto Messaging'},
      {filename:'House management'}
    ],pathLinks:'https://rent.pentmart.com/'},

    {id:3,name:'POS (Point Of Sells)',description:'The ultimate super POS software to get your business growing (NON-STOP)',
    features:[
      {filename:'Business management'},
      {filename:'Purchases'},
      {filename:'Suppliers & Customers'},
      {filename:'Sale & POS Terminal'},
      {filename:'Reports'},
      {filename:'Product Management'}
    ],pathLinks:'https://pos.ultimatefosters.com/products/create'},


    {id:4,name:'Hospital Management',description:'The ultimate hospital software (ERP) super software',
    features:[
      {filename:'Hr management'},
      {filename:'OPD management'},
      {filename:'Accountent'},
      {filename:'Nurses management'},
      {filename:'Doctors management'},
      {filename:'IPD management'},
      {filename:'Theater management'},
      {filename:'Pharmacy management'}
    ],pathLinks:''},


    {id:5,name:'E-commerce Business',description:'Product scopes selling and buying system (Local artworks)',
    features:[
      {filename:'Payment gateway'},
      {filename:'User management'},
      {filename:'Suppliers management'},
      {filename:'Stock management'},
      {filename:'Wishlist'},
      {filename:'Add to cart'},
      {filename:'Product management'}
    ],pathLinks:'https://africcraft.com'},


    {id:6,name:'Freelance Platform',description:'The ultimate freelance platform',
    features:[
      {filename:'Product selling'},
      {filename:'Car selling'},
      {filename:'Car rental'},
      {filename:'Freelancing'},
      {filename:'Job portal'}
    ],pathLinks:'https://pentmart.com'},


    {id:7,name:'Convid19 Tracker',description:'Scan,Stop and Live (Corona Free)',
    features:[
      {filename:'User Management'},
      {filename:'Scan Code'},
      {filename:'Car rental'},
      {filename:'Freelancing'},
      {filename:'Job portal'}
    ],pathLinks:'https://pentmart.com'}

  ]

  peoductData = this.dataProjects;

}
