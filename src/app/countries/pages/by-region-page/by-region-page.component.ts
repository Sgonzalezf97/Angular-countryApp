import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public countries :Country[]=[];
  public regions: Region[] = ['Americas','Africa','Asia','Europe','Oceania']
  public selectedRegion?: Region;
  public isLoadgin: boolean=false;

  constructor (private countriesService:CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    }

  searchByRegion (term:Region){
    this.selectedRegion = term;
    this.isLoadgin=true;
    this.countriesService.searchRegion(term).subscribe(countries => {
      this.countries = countries;
      this.isLoadgin=false;
    }
      );
  }

}
