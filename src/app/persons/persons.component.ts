import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  personList: string[];
  // private personsService: PersonsService;

  constructor(private personsService: PersonsService) {
    // this.personList = personsService.persons;
    this.personsService = personsService;
   }

  ngOnInit(): void {
    this.personList = this.personsService.persons;
  }

}
