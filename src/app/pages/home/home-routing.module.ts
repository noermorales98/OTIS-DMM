import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {IonicModule} from '@ionic/angular';
import {AddTaskPageModule} from '../add-task/add-task.module';
import {ToDoPageModule} from '../to-do/to-do.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'add-task',
    component: AddTaskPageModule
  },
  {
    path:'to-do',
    component: ToDoPageModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule],
  declarations: [
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
