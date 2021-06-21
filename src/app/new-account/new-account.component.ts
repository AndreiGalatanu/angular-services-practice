import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsServices } from '../accounts.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
    private accountService: AccountsServices) {


    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status ' + status)
    );

  }
  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountService.addAccount(accountName, accountStatus)

    // this.loggingService.logStatusChange(accountStatus);

  }
}
