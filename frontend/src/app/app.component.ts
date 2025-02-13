import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule,HomeComponent,CreateRecipeComponent, CommonModule],
  standalone : true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
