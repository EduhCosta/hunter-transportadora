import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { AppComponent } from "./app.component";

const ROUTER:Routes = [
    {path: "", component: AppComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTER);

export const Components = [
    AppComponent
];

export const Screens = [
    
];