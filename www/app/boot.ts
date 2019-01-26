/////<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap}    from '@angular/platform-browser-dynamic'
import {AppComponent} from './app.cmp';
import {appRouterProviders} from './app.routes';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(AppComponent, [ HTTP_PROVIDERS, appRouterProviders]);
