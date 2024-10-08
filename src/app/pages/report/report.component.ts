import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MoreComponent } from '../../components/more/more.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [HeaderComponent, MoreComponent, FooterComponent, RouterLink],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
})
export class ReportComponent {}
