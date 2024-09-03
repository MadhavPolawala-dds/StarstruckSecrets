import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HoroscopeComponent } from './pages/horoscope/horoscope.component';
import { MoreComponent } from './components/more/more.component';
import { TarotComponent } from './pages/tarot/tarot.component';
import { TheMagicianComponent } from './pages/the-magician/the-magician.component';
import { CoffeeCupReadingComponent } from './pages/coffee-cup-reading/coffee-cup-reading.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'horoscope',
    component: HoroscopeComponent,
  },
  {
    path: 'more',
    component: MoreComponent,
  },
  {
    path: 'tarot',
    component: TarotComponent,
  },
  {
    path: 'magician',
    component: TheMagicianComponent,
  },
  {
    path: 'coffee-cup-reading',
    component: CoffeeCupReadingComponent,
  },
];
