import { Component, OnInit } from '@angular/core';

@Component({
  //As a directive
  //selector: '[app-servers]',
  //As a class
  //selector: '.app-servers',
  //As a tag
  selector: 'app-servers',
  templateUrl: './servers.component.html',
/*   template: `
    <app-server></app-server>
    <app-server></app-server>`, */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];


  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServer(event: Event ){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
