import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HoroscopeComponent } from './pages/horoscope/horoscope.component';
import { MoreComponent } from './components/more/more.component';

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
];
