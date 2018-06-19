import { Routes, RouterModule } from '@angular/router';
import { PieChartComponent } from './Pie-Chart/pie-chart.component';
import { GraphChartComponent } from './Graph-Chart/graph-chart.component';
import { DiagramBarComponent } from './Diagram-Bar/diagram-bar.component';

const App_Routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'pie-chart', component: PieChartComponent},
  {path: 'graph-chart', component: GraphChartComponent},
  {path: 'bar-diagram', component: DiagramBarComponent}

];
export const routing = RouterModule.forRoot(App_Routes);
