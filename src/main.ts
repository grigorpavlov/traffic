import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule } from '@angular/router';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { MissingTranslationStrategy } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

declare const require;

const translations = require('raw-loader!./locale/messages.en.xlf').default;

platformBrowserDynamic().bootstrapModule(AppModule, {
  missingTranslation: MissingTranslationStrategy.Error,
  providers: [
    {provide: TRANSLATIONS, useValue: translations},
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
  ]
});

