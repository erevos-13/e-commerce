import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { UserServrices } from './app/services/user.servrices';
import { UserApi } from './app/services/api/userApi';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MainInterceptor } from './app/interceptor/main.interceptor';

if (environment.production) {
  enableProdMode();
}
const routes: Routes = [];
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    UserServrices,
    UserApi,
    importProvidersFrom(HttpClientModule),
    CommonModule,
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true },
  ],
});
