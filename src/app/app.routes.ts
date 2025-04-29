import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path :'' , 
        redirectTo: 'main-page' , 
        pathMatch:'full'
    }  , {
        path :'main-page' , 
        loadComponent:()=>import('../components/hero/hero.component').then((m)=>m.HeroComponent) , 
        title:"JSB-Filteration"
    } , 
    
    {
        path :'details/:id' , 
        loadComponent:()=>import('../components/meal-details/meal-details.component').then((m)=>m.MealDetailsComponent), 
        title:'details'
    }
    ,
    {
        path :'**' , 
        loadComponent:()=>import('../components/not-found/not-found.component').then((m)=>m.NotFoundComponent) , 
        title : 'not-found'
    }
];
