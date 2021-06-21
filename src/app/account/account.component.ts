import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsServices } from '../accounts.services';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsServices) {

  }

  onSetTo(status: string) {
    this.accountsService.updateStatusAccount(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
