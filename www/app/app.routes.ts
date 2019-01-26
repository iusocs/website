import {provideRouter, RouterConfig} from '@angular/router';
import {HomeCmp} from './home.cmp';
import {EventsCmp} from './events.cmp';
import {ResearchCmp} from './research.cmp';
import {AboutCmp} from './about.cmp';

const routes: RouterConfig = [
    {path: '', component: HomeCmp},
    {path: 'research', component: ResearchCmp},
    {path: 'about', component: AboutCmp},
    {path: 'events', component: EventsCmp},
    {path: '**', component: HomeCmp},
];

export const appRouterProviders =[
    provideRouter(routes)
];
