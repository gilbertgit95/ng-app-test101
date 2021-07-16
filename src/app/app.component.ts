import { Component } from '@angular/core';

@Component({
  selector: 'app-root-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'root';
  description = 'this component is the root.';
  routerlabel = 'root router'
  routes = [
    {
      label: 'Components',
      route: '/'
    },
    {
      label: 'Routing',
      route: '/routing'
    },
    {
      label: 'Directives',
      route: '/directives'
    },
    {
      label: 'Pipes',
      route: '/pipes'
    },
    {
      label: 'Services',
      route: '/services'
    }
  ]
}
