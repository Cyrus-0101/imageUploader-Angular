import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
	{ path: '', redirectTo: '/form', pathMatch: 'full' },
	{ path: 'form', component: FormComponent },
    { path: 'profiles', component: ProfilesComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
