import { Component } from '@angular/core';
import jsonData from '../../assets/data/horoscope.json'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
horoscopes : any = jsonData.horoscope
}
