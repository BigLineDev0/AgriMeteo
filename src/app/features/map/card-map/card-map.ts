import { Component } from '@angular/core';

@Component({
  selector: 'app-card-map',
  imports: [],
  standalone:true,
  templateUrl: './card-map.html',
  styleUrl: './card-map.css',
})
export class CardMap {
  selectedRegion: string | null = null;

  onRegionClick(region: string) {
    this.selectedRegion = region;
    console.log('Région sélectionnée:', region);
    // Ici tu peux déclencher une requête API météo ou afficher des données
  }
}