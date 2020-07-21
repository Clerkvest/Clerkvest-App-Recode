import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from '../../../../core/utils/logger/logger.service';
import {SubscriptionService} from '../../../../core/utils/subscription/subscription.service';
import {IInvestIn} from '../../../../core/api/models/IInvestIn';
import {InvestRepositoryService} from '../../../../core/api/repository/invest/invest-repository.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent implements OnInit, OnDestroy {

  private _logger: LoggerService;
  private _subscriptionService: SubscriptionService;

  constructor(
    private _investmentRepository: InvestRepositoryService) {
  }

  private _investments: Array<IInvestIn> = [];

  get investments(): Array<IInvestIn> {
    return this._investments;
  }

  set investments(value: Array<IInvestIn>) {
    this._investments = value;
  }

  ngOnInit(): void {
    this._logger = LoggerService.build(InvestmentListComponent.name);
    this._subscriptionService = new SubscriptionService();
    //this._userRepo.getMyself().toPromise().then(loadUserDetails(value))

    this._subscriptionService.add(this._investmentRepository.getAll().subscribe(
      response => {
        this._investments = response;
      }
    ), 'MeComponent#ngOnInit');
  }

  ngOnDestroy(): void {
    this._subscriptionService.unsubscribe();
  }

}
