import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MoreComponent } from '../../components/more/more.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-coffee-cup-reading',
  standalone: true,
  imports: [HeaderComponent, MoreComponent, FooterComponent],
  templateUrl: './coffee-cup-reading.component.html',
  styleUrl: './coffee-cup-reading.component.css',
})
export class CoffeeCupReadingComponent {}
