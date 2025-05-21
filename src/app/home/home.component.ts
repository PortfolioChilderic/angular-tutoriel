import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule, FormsModule],
  template: `
    <section>
      <form (ngSubmit)="filterResults(filter.value)">
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="submit">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList$ | async"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: [`./home.component.css`]
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList$: Observable<HousingLocation[]> = this.housingService.getAllHousingLocations();
  filteredLocationList$: Observable<HousingLocation[]> = this.housingLocationList$;


  filterResults(text: string) {
    this.filteredLocationList$ = new Observable((observer) => {
      this.housingLocationList$.subscribe((housingLocations) => {
        const filter = text
          ? housingLocations.filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()))
          : housingLocations;
        observer.next(filter);
        observer.complete();
      })
    })
  }
}
