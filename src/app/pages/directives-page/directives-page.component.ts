import { Component } from '@angular/core';

@Component({
    selector: 'directives-page',
    templateUrl: './directives-page.component.html',
    styleUrls: ['./directives-page.component.scss']
})
export class DirectivesPageComponent {
    title = 'Directives page'
    subRoutes = [
        {
            label: 'introduction',
            route: './introduction'
        }
    ]
}