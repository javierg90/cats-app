import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ApiCatsServiceService } from './services/api-cats-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule],
  providers: [ApiCatsServiceService],
})
export class AppComponent {
  constructor() {}
}
