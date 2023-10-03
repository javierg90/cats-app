import { ApiCatsServiceService } from './../../services/api-cats-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Cats } from 'src/app/interfaces/cats';

@Component({
  selector: 'app-cats-cards',
  templateUrl: './cats-cards.component.html',
  styleUrls: ['./cats-cards.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class CatsCardsComponent implements OnInit {
  @Input() catInfo!: Cats;

  constructor(private apiCatsServiceService: ApiCatsServiceService) {}

  ngOnInit() {
    this.apiCatsServiceService
      .getImageCat(this.catInfo.imageId)
      .subscribe((response: string) => {
        this.catInfo.imageUrl = response;
      });
  }
}
