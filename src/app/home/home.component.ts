import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cwa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title:string = 'Welcome';
  public text:string = 'Luis';
  public clickMessage:string = '';
  values = '';

  constructor() { }

  ngOnInit() {
  }

  public onClickMe(): void {
    this.clickMessage = "Hola Mundo";
  }

  public onCheck(): void {
    // alert('Evento Checkbox');
    console.log('Evento Checkbox');
    this.clickMessage = 'Evento Checkbox';
  }

  onKey(event:any) {
    this.values += event.target.value + ' | ';
  }

}
