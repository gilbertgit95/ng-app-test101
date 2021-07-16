import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentPageComponent } from './../pages/component-page/component-page.component';
import { ComponentIntroductionPageComponent } from './../pages/component-page/sub-pages/component-introduction-page/component-introduction-page.component';
import { ComponentDatabindingPageComponent } from './../pages/component-page/sub-pages/component-databinding-page/component-databinding-page.component';

import { RoutingPageComponent } from './../pages/routing-page/routing-page.component';
import { DirectivesPageComponent } from './../pages/directives-page/directives-page.component';
import { PipesPageComponent } from './../pages/pipes-page/pipes-page.component';
import { ServicesPageComponent } from './../pages/services-page/services-page.component';
import { ErrorPageComponent } from './../pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentPageComponent,
    children: [
      {
        path: 'introduction',
        component: ComponentIntroductionPageComponent
      },
      {
        path: 'databinding',
        component: ComponentDatabindingPageComponent
      }
    ]
  },
  {
    path: 'routing',
    component: RoutingPageComponent
  },
  {
    path: 'directives',
    component: DirectivesPageComponent
  },
  {
    path: 'pipes',
    component: PipesPageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
