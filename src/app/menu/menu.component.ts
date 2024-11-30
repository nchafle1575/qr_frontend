import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // API URL to fetch the menu items
    const apiUrl = 'https://qrbackend-production.up.railway.app/menu';
    
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.menuItems = data;  // Assign the response data to the menuItems array
      },
      (error) => {
        console.error('Error fetching menu items:', error);
      }
    );
  }
}

















// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { MenuService } from './menu.service';

// interface MenuItem {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   modelUrl: string;
// }

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent implements OnInit {
//   menu: MenuItem[] = []; // Specify the type of the array
//   menuItems: any[] = [];

//   constructor(private menuService: MenuService) {}

//   ngOnInit(): void {
//     // Fetch menu data from backend
//     this.menuService.getMenu().subscribe(
//       (data) => {
//         this.menuItems = data;
//       },
//       (error) => {
//         console.error('Error fetching menu:', error);
//       }
//     );
//   }

//   // viewInAR(modelUrl: string): void {
//   //   window.location.href = `/ar-view?modelUrl=${encodeURIComponent(modelUrl)}`;
//   // }
// }
