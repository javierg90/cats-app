import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiCatsServiceService } from './../services/api-cats-service.service';
import { CatsCardsComponent } from '../components/cats-cards/cats-cards.component';
import { Cats } from '../interfaces/cats';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CatsCardsComponent],
})
export class HomePage {
  cats: Cats[] = [];

  constructor(private apiCatsServiceService: ApiCatsServiceService) {
    this.apiCatsServiceService.getCats().subscribe((response: Cats[]) => {
      this.cats = response.map((item) => this.extractKeys(item));
      console.log(this.cats);
    });
  }

  extractKeys(response: any): any {
    return {
      breedName: response.name,
      origin: response.origin,
      affectionLevel: response.affection_level,
      intelligence: response.intelligence,
      imageId: response.reference_image_id,
      imageUrl: '',
    };
  }
}
