import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*To use Animations*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*To use Material*/
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

/*To use Routing*/
import { routing } from './app-routing';

/*Custom componetns*/
import { AppComponent } from './app.component';
import { PieChartComponent } from './Pie-Chart/pie-chart.component';
import { GraphChartComponent } from './Graph-Chart/graph-chart.component';
import { DiagramBarComponent } from './Diagram-Bar/diagram-bar.component';

/*To use MdBootstrap*/
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
/*To use HighCharts*/
import { ChartModule } from 'angular-highcharts';

/*For Color-picker*/
import { ColorPickerModule } from 'ngx-color-picker';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    GraphChartComponent,
    HeaderComponent,
    DiagramBarComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    routing,
    ChartModule,
    ColorPickerModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {

}
