import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries :Country[]=[];
  public regions: Region[] = ['Americas','Africa','Asia','Europe','Oceania']
  public selectedRegion?: Region;

  constructor (private countriesService:CountriesService ){}

  searchByRegion (term:Region){
    this.selectedRegion = term;
    this.countriesService.searchRegion(term).subscribe(countries => {
      this.countries = countries;
    }
      );
  }

}
