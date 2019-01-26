import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HeaderCmp} from './header.cmp';
import {NavbarCmp} from './navbar.cmp';
import {HomeCmp} from './home.cmp';
import {FooterCmp} from './footer.cmp';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.cmp.html',
    directives: [ROUTER_DIRECTIVES, HeaderCmp, NavbarCmp, FooterCmp],
})

export class AppComponent {

}
