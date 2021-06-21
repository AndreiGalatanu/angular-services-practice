import { Component, OnInit } from '@angular/core';
import { AccountsServices } from './accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  accounts: { name: string, status: string }[] = [];

  constructor(private accountsServices: AccountsServices) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.accounts = this.accountsServices.accounts;
  }



}
