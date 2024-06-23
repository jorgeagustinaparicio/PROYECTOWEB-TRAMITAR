import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from "./carousel/carousel.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // templateUrl: './home/home.component.html',
  // styleUrl: './home/home.component.css',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CarouselComponent, HeaderComponent, FooterComponent, NavbarComponent, CardComponent]
})
export class AppComponent {
  title = 'TramitAR';
}
