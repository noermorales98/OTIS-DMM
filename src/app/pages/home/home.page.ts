import { Component } from '@angular/core';
interface Componente {
  // eslint-disable-next-line @typescript-eslint/ban-types
  redirectTo: String;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  componentes: Componente[]=[{
    redirectTo: '/add-task'
  }];


  totaltareas: Tareas = {
    id: 1,
    name: 'Noeli',
    total: 10,
  };
  todo: Componente[]=[{
    redirectTo: '/to-do'
  }];
  info: Componente[]=[{
    redirectTo:'/task-info'
  }];
  constructor() {}

}

export interface Tareas {
  id: number;
  name: string;
  total: number;
}
