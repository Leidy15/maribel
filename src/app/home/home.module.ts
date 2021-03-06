import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppService } from '../services/app.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers:[AppService]
})
export class HomeModule { }
