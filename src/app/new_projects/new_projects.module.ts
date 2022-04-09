import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { New_projectsRoutingModule } from './New_projects-routing.module';
import { New_projectsComponent } from './new_projects.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, New_projectsRoutingModule],
  declarations: [New_projectsComponent],
})
export class New_projectsModule {}
