import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from './workers/workers.component';
import { workersResolver } from 'src/app/core/services/workers.resolver';

const routes: Routes = [{
  path: '', 
  component: WorkersComponent,
  resolve: {
    workers: workersResolver,
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRouteRoutingModule { }
