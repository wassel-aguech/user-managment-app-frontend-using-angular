import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  mode = "create"
  text = "create"
  temp: any
  i: any

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
      if (this.mode == "create") {
        this.socials.push(this.social)
        this.social = {
          name: "",
          role: "",
          tel: "",
          email: "",
          imageurl: "",
        }
        alert("ajout effectuee avec sucee")

      } else {
        this.socials[this.temp] = this.social
        this.mode = "create"
        alert(" update effectuee avec succee")

        this.social = {
          name: "",
          role: "",
          tel: "",
          email: "",
          imageurl: "",
        }
      }
    } else {
      alert("remplir tout les champs de formulaire")
    }

  }


  delete() {
    this.socials.splice(0, 1)
    console.log(" the new table is ", this.socials)
  }




  update(i: any) {
    this.social.name = this.socials[i].name;
    this.social.role = this.socials[i].role;
    this.social.tel = this.socials[i].tel;
    this.social.email = this.socials[i].email;
    this.social.imageurl = this.socials[i].imageurl;


    this.mode = "update"
    this.temp = i;
    this.text = "update"



  }
}
