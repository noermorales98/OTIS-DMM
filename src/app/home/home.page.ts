import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tareas: Tareas = {
    id: 1,
    name: 'Noeli',
    total: 10,
  };

  constructor() {}

}

export interface Tareas {
  id: number;
  name: string;
  total: number;
}
