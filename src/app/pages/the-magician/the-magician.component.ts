import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MoreComponent } from '../../components/more/more.component';

@Component({
  selector: 'app-the-magician',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MoreComponent],
  templateUrl: './the-magician.component.html',
  styleUrl: './the-magician.component.css',
})
export class TheMagicianComponent {}
