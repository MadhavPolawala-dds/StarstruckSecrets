import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MoreComponent } from '../../components/more/more.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import blogData from '../../../assets/data/blog.json';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderComponent, MoreComponent, FooterComponent, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blog: any = blogData.blog;
}
