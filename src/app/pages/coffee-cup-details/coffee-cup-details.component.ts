import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MoreComponent } from '../../components/more/more.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coffee-cup-details',
  standalone: true,
  imports: [HeaderComponent, MoreComponent, FooterComponent, RouterLink],
  templateUrl: './coffee-cup-details.component.html',
  styleUrl: './coffee-cup-details.component.css',
})
export class CoffeeCupDetailsComponent {}
