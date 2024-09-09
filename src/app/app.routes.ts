import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HoroscopeComponent } from './pages/horoscope/horoscope.component';
import { MoreComponent } from './components/more/more.component';
import { TarotComponent } from './pages/tarot/tarot.component';
import { TheMagicianComponent } from './pages/the-magician/the-magician.component';
import { CoffeeCupReadingComponent } from './pages/coffee-cup-reading/coffee-cup-reading.component';
import { CoffeeCupDetailsComponent } from './pages/coffee-cup-details/coffee-cup-details.component';
import { FortuneCookieComponent } from './pages/fortune-cookie/fortune-cookie.component';
import { FortuneCookieAnswerComponent } from './pages/fortune-cookie-answer/fortune-cookie-answer.component';
import { LoveCompatibilityComponent } from './pages/love-compatibility/love-compatibility.component';
import { ReportComponent } from './pages/report/report.component';

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
  {
    path: 'coffee-cup-details',
    component: CoffeeCupDetailsComponent,
  },
  {
    path: 'fortune-cookie',
    component: FortuneCookieComponent,
  },
  {
    path: 'fortune-cookie-answer',
    component: FortuneCookieAnswerComponent,
  },
  {
    path: 'love-compatibility',
    component: LoveCompatibilityComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  },
];
