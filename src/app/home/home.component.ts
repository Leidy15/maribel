import { Component, OnInit } from '@angular/core';
import { routesPath } from 'src/const';
import * as moment from 'moment';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hour!: string;
  date!: string;
  estrellas!: any;
  menuList = [
    {
      label: 'Diseños infantiles',
      route: `/${routesPath.home.path}/${routesPath.home.menuInfantil}`,
    },
    {
      label: 'Tortas personalizadas',
      route: `/${routesPath.home.path}/${routesPath.home.tortas}`,
    },
    {
      label: 'Decoracion Golosinas',
      route: `/${routesPath.home.path}/${routesPath.home.golosinas}`,
    },
    {
      label: 'Cupcakes',
      route: `/${routesPath.home.path}/${routesPath.home.cupcakes}`,
    },
    {
      label: 'Date un Gusto!!',
      route: `/${routesPath.home.path}/${routesPath.home.gusto}`,
    },
  ];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.initTime();
    this.appService.getApp().subscribe((data) => {
      this.estrellas = data;
      console.log(data);
    });
  }
  initTime() {
    setInterval(() => {
      this.getDate();
      this.getHour();
    }, 1000);
  }
  getHour() {
    this.hour = moment(new Date()).format('hh:mm:ss A');
  }
  getDate() {
    this.date = moment(new Date()).format('DD/MM/YY');
  }
  updateStarts() {
    this.appService.update({
      cinco: Math.floor(Math.random() * 100),
      cuatro: Math.floor(Math.random() * 100),
      tres: Math.floor(Math.random() * 100),
      dos: Math.floor(Math.random() * 100),
      uno: Math.floor(Math.random() * 100),
    });
  }
}
