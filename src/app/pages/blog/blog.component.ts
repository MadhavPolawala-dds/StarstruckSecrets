import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MoreComponent } from '../../components/more/more.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import blogData from '../../../assets/data/blog.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    HeaderComponent,
    MoreComponent,
    FooterComponent,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blog: any = blogData.blog;
  blogData: any = blogData.blog; // Original blog data
  filteredBlogs: any = this.blogData; // To hold filtered blogs
  searchTerm: string = ''; // Property for the search input

  onSearch() {
    const lowerSearchTerm = this.searchTerm.toLowerCase();

    // Filter blog posts based on title or description matching search term
    this.filteredBlogs = this.blogData.filter(
      (item: any) =>
        item.title.toLowerCase().includes(lowerSearchTerm) ||
        item.description.toLowerCase().includes(lowerSearchTerm)
    );
  }
}
