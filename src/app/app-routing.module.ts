import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EducationComponent} from './education/education.component';
import {DashboardComponent} from './dashboards/dashboard.component';
import {SkillsComponent} from './skills/skills.component';
import {ExperienceComponent} from './experience/experience.component';
import {BioDataComponent} from './bioData/bioData.component';
const routes: Routes = [
  // { path: 'education', loadChildren: './education/education.module#EducationModule'},
  { path: '', component: DashboardComponent},
  { path: 'bioData', component: BioDataComponent},
  { path: 'education', component: EducationComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
