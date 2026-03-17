import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        {
          path: '',
          loadComponent: () => import('./app/landing/landing.component').then((m) => m.LandingComponent),
        },
      ],
      withEnabledBlockingInitialNavigation()
    ),
  ],
}).catch((err) => console.error(err));
