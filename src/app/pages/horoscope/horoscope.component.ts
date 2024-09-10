import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import jsonData from '../../../assets/data/horoscope.json';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-horoscope',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './horoscope.component.html',
  styleUrl: './horoscope.component.css',
})
export class HoroscopeComponent {
  timingOptions = [
    'Yesterday',
    'Today',
    'Tomorrow',
    'Weekly',
    'Monthly',
    'Yearly',
  ];
  selectedOption = 'Select Option';
  isDropdownOpen = false;

  selectedItemId: number | null = null;

  horoscopes: any = jsonData.horoscope;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scrollLeft() {
    if (this.scrollContainer) {
      const container = this.scrollContainer.nativeElement;
      container.scrollLeft -= 182;
      console.log('Scrolled left:', container.scrollLeft);
    }
  }

  scrollRight() {
    if (this.scrollContainer) {
      const container = this.scrollContainer.nativeElement;
      container.scrollLeft += 182;
      console.log('Scrolled right:', container.scrollLeft);
    }
  }

  selectItem(itemId: number) {
    this.selectedItemId = itemId;
    console.log('Selected item ID:', itemId);
  }
}
