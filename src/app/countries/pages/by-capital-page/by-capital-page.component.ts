import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent  implements OnInit{

  public countries :Country[]=[];
  public isLoadgin: boolean=false;
  public initialValue: string="";


  constructor (private countriesService:CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
    }

  searchByCapital (term:string){
    this.isLoadgin=true;
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
      this.isLoadgin=false;
    }
      );
  }


}
