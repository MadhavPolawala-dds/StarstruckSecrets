import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MoreComponent } from '../../components/more/more.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-fortune-cookie',
  standalone: true,
  imports: [HeaderComponent, MoreComponent, FooterComponent],
  templateUrl: './fortune-cookie.component.html',
  styleUrl: './fortune-cookie.component.css',
})
export class FortuneCookieComponent {}
