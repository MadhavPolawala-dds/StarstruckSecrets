import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MoreComponent } from '../../components/more/more.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-fortune-cookie-answer',
  standalone: true,
  imports: [HeaderComponent, MoreComponent, FooterComponent],
  templateUrl: './fortune-cookie-answer.component.html',
  styleUrl: './fortune-cookie-answer.component.css',
})
export class FortuneCookieAnswerComponent {}
