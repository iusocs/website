import {Component} from '@angular/core';
declare var directory: any;

@Component({
    selector:'research',
    templateUrl:'app/research.cmp.html',
    directives:[],
})

export class ResearchCmp {
    listings = directory;
}
