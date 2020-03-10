import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartsidanComponent } from './startsidan/startsidan.component';
import { SenasteArtiklarComponent } from './senaste-artiklar/senaste-artiklar.component';
import { LoggaInComponent } from './logga-in/logga-in.component';
import { AddArtikelComponent } from './add-artikel/add-artikel.component';
import { AllaComponent } from './alla/alla.component';
const routes: Routes = [
	
	{ path: 'startsidan', component: StartsidanComponent, pathMatch: 'full' },	
	{ path: 'senaste-artiklar', component: SenasteArtiklarComponent, pathMatch: 'full'},

    { path: 'logga-in', component: LoggaInComponent, pathMatch: 'full' },
    { path: 'add-artikel', component: AddArtikelComponent, pathMatch: 'full' },
    { path: 'alla', component: AllaComponent, pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }