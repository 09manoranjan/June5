import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'addStudents',component:AddStudentComponent},
  {path:'listStudents',component:ListStudentComponent},
  {path:'updateStudents/:id',component:UpdateStudentComponent},
  {path:'updateStudents',component:UpdateStudentComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
