import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  social = {
    name: "",
    role: "",
    tel: "",
    email: "",
    imageurl: "",
  }
  socials: any[] = [];

  constructor() { }
  ngOnInit() {
  }


  ajout() {
    if (this.social.name && this.social.role && this.social.imageurl && this.social.tel && this.social.email) {
      this.socials.push(this.social)
      console.log(this.socials)
      this.social = {
        name: "",
        role: "",
        tel: "",
        email: "",
        imageurl: "",
      }
    } else {
      alert("remplir tout les champs de formulaire")
    }

  }

  delete() {
    this.socials.splice(0, 1)
    console.log(" the new table is ", this.socials)
  }




}
