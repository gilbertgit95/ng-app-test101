import { Component } from '@angular/core';

@Component({
    selector: 'component-page',
    templateUrl: './component-page.component.html',
    styleUrls: ['./component-page.component.scss']
})
export class ComponentPageComponent {
    title = 'Component page'
    subRoutes = [
        {
            label: 'introduction',
            route: './introduction'
        },
        {
            label: 'Data binding',
            route: './databinding'
        }
    ]
}