import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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

  showModal() {
    $("#myModal").modal('show');
  }

  add_user(){
    $("#myModal").modal('hide');
  }

  // Modal functions
  
  hideModal(){
    $("#myModal").modal('hide');
  }

  // End of Modal functions

}
