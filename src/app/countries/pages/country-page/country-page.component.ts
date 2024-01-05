import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public countryObject?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountriesService,
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countryService.searchCountryCode(id) )
    ).subscribe( (country): any => {
        if (!country) {
          return this.router.navigateByUrl('')
        }
        this.countryObject = country;
        console.log(country)
        return;
      });
  }


}
