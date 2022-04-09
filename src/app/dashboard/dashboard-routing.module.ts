import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ProjectsComponent } from '../projects/projects.component';
import { New_projectsComponent } from '../new_projects/new_projects.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent, data: { title: marker('Home') } },
    { path: 'projects', component: ProjectsComponent, data: { title: marker('Projects') } },
    { path: 'new_projects', component: New_projectsComponent, data: { title: marker('New_projects') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DashboardRoutingModule {}
