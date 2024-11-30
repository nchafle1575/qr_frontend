import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuService } from './menu.service';

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
  menuItems: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // Fetch menu data from backend
    this.menuService.getMenu().subscribe(
      (data) => {
        this.menuItems = data;
      },
      (error) => {
        console.error('Error fetching menu:', error);
      }
    );
  }

  viewInAR(modelUrl: string): void {
    window.location.href = `/ar-view?modelUrl=${encodeURIComponent(modelUrl)}`;
  }
}
