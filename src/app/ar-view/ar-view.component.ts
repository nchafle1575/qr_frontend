import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ar-view',
  templateUrl: './ar-view.component.html',
  styleUrls: ['./ar-view.component.css']
})
export class ArViewComponent implements OnInit {
  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const modelUrl = urlParams.get('modelUrl');

    if (modelUrl) {
      const modelEntity = document.querySelector('#model');
      if (modelEntity) {
        modelEntity.setAttribute('gltf-model', modelUrl);
      } else {
        console.error('Model entity not found in the DOM.');
      }
    } else {
      console.error('No modelUrl parameter found in the URL.');
    }
  }
}
