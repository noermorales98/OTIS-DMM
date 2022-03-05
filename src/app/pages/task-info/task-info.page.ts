import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.page.html',
  styleUrls: ['./task-info.page.scss'],
})
export class TaskInfoPage {
  fechaCorta: string = new Date().toLocaleDateString();
  fecha: string = this.fechaCorta;
  minFecha: string = (new Date()).toString();
  maxFecha: string = (new Date()).toString();


}
