import { Component } from '@angular/core';
import { HeroComponentComponent } from "../hero-component/hero-component.component";
import { HowWeWorkComponent } from "../how-we-work/how-we-work.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { RecipesComponent } from "../recipes/recipes.component";
import { TestemonialComponent } from "../testemonial/testemonial.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
  selector: 'app-hero',
  imports: [HeroComponentComponent, HowWeWorkComponent, AboutUsComponent, RecipesComponent, TestemonialComponent, ContactUsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
