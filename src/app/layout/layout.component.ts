import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  userData : any

  constructor() { }

  ngOnInit() {
    this.userData = {
      "_id": sessionStorage.getItem('_id'),
      "username": sessionStorage.getItem('username'),
      "email": sessionStorage.getItem('email'),
      "role": parseInt(sessionStorage.getItem('role')),
      "group_id": parseInt(sessionStorage.getItem('group_id')),
      "channel_id": parseInt(sessionStorage.getItem('channel_id'))
    }
  }

}
