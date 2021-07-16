import { Component } from '@angular/core';

@Component({
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