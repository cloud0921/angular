import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodComponent } from './good/good.component';
import { BadComponent } from './bad/bad.component';

const routes: Routes = [  { path: 'good', component: GoodComponent },
                          // { path: 'bad', component: BadComponent },
                          // { path: 'bad2', component: BadComponent } ,
                        { path: 'bad', loadChildren:()=> import('./routing2/routing2.module').then(m=>m.Routing2Module)},  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
