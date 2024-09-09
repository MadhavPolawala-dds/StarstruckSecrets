import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MoreComponent } from '../../components/more/more.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HoroscopeComponent } from '../horoscope/horoscope.component';
import jsonData from '../../../assets/data/horoscope.json';

@Component({
  selector: 'app-love-compatibility',
  standalone: true,
  imports: [HeaderComponent, MoreComponent, FooterComponent],
  templateUrl: './love-compatibility.component.html',
  styleUrl: './love-compatibility.component.css',
})
export class LoveCompatibilityComponent extends HoroscopeComponent {
  @ViewChild('scrollContainer2') scrollContainer2!: ElementRef;

  horoscopes2: any = jsonData.horoscope;
  selectedItem2Id: number | null = null;
  scrollLeft2() {
    if (this.scrollContainer2) {
      const container2 = this.scrollContainer2.nativeElement;
      container2.scrollLeft -= 182;
      console.log('Scrolled left:', container2.scrollLeft);
    }
  }
  scrollRight2() {
    if (this.scrollContainer2) {
      const container2 = this.scrollContainer2.nativeElement;
      container2.scrollLeft += 182;
      console.log('Scrolled right:', container2.scrollLeft);
    }
  }
  selectItem2(itemId: number) {
    this.selectedItem2Id = itemId;
    console.log('Selected item ID:', itemId);
  }
}
