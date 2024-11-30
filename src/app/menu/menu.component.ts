import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  modelUrl: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: MenuItem[] = []; // Specify the type of the array

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<MenuItem[]>('http://localhost:3000/menu').subscribe((data) => {
      this.menu = data;
    });
  }

  viewInAR(modelUrl: string): void {
    window.location.href = `/ar-view?modelUrl=${encodeURIComponent(modelUrl)}`;
  }
}
