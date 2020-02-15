import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {

  personList: string[];
  // private personsService: PersonsService;
  private personsListSubscription: Subscription;

  constructor(private personsService: PersonsService) {
    // this.personList = personsService.persons;
    this.personsService = personsService;
   }

  ngOnInit(): void {
    // this.personList = this.personsService.persons;
    this.personsListSubscription = this.personsService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
    this.personsService.fetchPersons();
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.personsListSubscription.unsubscribe();
  }

  onRemovePerson(person: string) {
    this.personsService.removePerson(person);
  }

}
