import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  //Esto se lo pasamos a la vista.
  agnosPersonalizados = [2020, 2016, 2008, 2004, 2000, 1996];
  nombresDiasCortados = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom'];
  opcionesPersonalizas: any;

  constructor() {
    this.opcionesPersonalizas = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }


  ngOnInit() {
  }
}
