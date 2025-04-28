import { Component } from '@angular/core';

import { HeroComponentComponent } from "../components/hero-component/hero-component.component";
import { HowWeWorkComponent } from "../components/how-we-work/how-we-work.component";
import { AboutUsComponent } from "../components/about-us/about-us.component";
import { RecipesComponent } from "../components/recipes/recipes.component";
import { TestemonialComponent } from "../components/testemonial/testemonial.component";
import { ContactUsComponent } from "../components/contact-us/contact-us.component";

@Component({
  selector: 'app-root',
  imports: [HeroComponentComponent, HowWeWorkComponent, AboutUsComponent, RecipesComponent, TestemonialComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jsb-filteration-task';
}
