import { Component, ViewChild, ElementRef } from '@angular/core';
import { BlogComponent } from '../blog/blog.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MoreComponent } from '../../components/more/more.component';
import { FooterComponent } from '../../components/footer/footer.component';
import {
  ActivatedRoute,
  RouterLink,
  Router,
  NavigationEnd,
} from '@angular/router';
import blogData from '../../../assets/data/blog.json';
import { filter } from 'rxjs';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [HeaderComponent, MoreComponent, FooterComponent, RouterLink],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css',
})
export class SingleBlogComponent extends BlogComponent {
  singleBlog: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.loadBlog();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.loadBlog();
      });
    // Get the blog ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    // Find the blog post with the matching ID
    this.singleBlog = blogData.blog.find((post: any) => post.id === Number(id));
  }

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  scrollLeft() {
    const container = this.scrollContainer.nativeElement;
    const itemWidth = container.querySelector('.p-5').offsetWidth; // Width of one blog item
    container.scrollBy({
      left: -itemWidth, // Scroll to the left
      behavior: 'smooth',
    });
  }

  // Scroll right by one item's width
  scrollRight() {
    const container = this.scrollContainer.nativeElement;
    const itemWidth = container.querySelector('.p-5').offsetWidth; // Width of one blog item
    container.scrollBy({
      left: itemWidth, // Scroll to the right
      behavior: 'smooth',
    });
  }

  loadBlog() {
    const id = this.route.snapshot.paramMap.get('id');
    this.singleBlog = this.blogData.find((post: any) => post.id === Number(id));
  }
}
