import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ProjectRepositoryService} from '../../core/api/repository/project/project-repository.service';
import {LocalizationService} from '../../core/utils/localization/localization.service';
import {LoggerService} from '../../core/utils/logger/logger.service';
import {SubscriptionService} from '../../core/utils/subscription/subscription.service';
import {Observable} from 'rxjs';
import {IProjectImage} from '../../core/api/models/IProjectImage';

@Component({
  selector: 'app-dashboard-material',
  templateUrl: './dashboard-material.component.html',
  styleUrls: ['./dashboard-material.component.scss']
})
export class DashboardMaterialComponent implements OnInit {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {title: 'Card 1', cols: 1, rows: 1},
          {title: 'Card 2', cols: 1, rows: 1},
          {title: 'Card 3', cols: 1, rows: 1},
          {title: 'Card 4', cols: 1, rows: 1}
        ];
      }

      return [
        {title: 'Card 1', cols: 2, rows: 1},
        {title: 'Card 2', cols: 1, rows: 1},
        {title: 'Card 3', cols: 1, rows: 2},
        {title: 'Card 4', cols: 1, rows: 1}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private _projectRepository: ProjectRepositoryService,
              private _localizationService: LocalizationService) {
    this._logger = LoggerService.build(DashboardMaterialComponent.name);
    this._subscription = new SubscriptionService();
  }

  private _logger: LoggerService;

  /**
   * Getter logger
   * @return {LoggerService}
   */
  public get logger(): LoggerService {
    return this._logger;
  }

  /**
   * Setter logger
   * @param {LoggerService} value
   */
  public set logger(value: LoggerService) {
    this._logger = value;
  }

  private _subscription: SubscriptionService;

  /**
   * Getter subscription
   * @return {SubscriptionService}
   */
  public get subscription(): SubscriptionService {
    return this._subscription;
  }

  /**
   * Setter subscription
   * @param {SubscriptionService} value
   */
  public set subscription(value: SubscriptionService) {
    this._subscription = value;
  }

  private _projectsObservable: Observable<Array<IProjectImage>>;

  /**
   * Getter projectsObservable
   * @return {Observable<Array<IProjectImage>>}
   */
  public get projectsObservable(): Observable<Array<IProjectImage>> {
    return this._projectsObservable;
  }

  /**
   * Setter projectsObservable
   * @param {Observable<Array<IProjectImage>>} value
   */
  public set projectsObservable(value: Observable<Array<IProjectImage>>) {
    this._projectsObservable = value;
  }

  /**
   * Getter localizationService
   * @return {LocalizationService}
   */
  public get localizationService(): LocalizationService {
    return this._localizationService;
  }

  ngOnInit(): void {
    this._projectsObservable = this._projectRepository.getAll();
  }

  public orderClose(projects: Array<IProjectImage>) {
    if (projects) {
      return projects.sort((a, b) => {
        return this.percentInvested(b) - this.percentInvested(a);
      });
    }
  }

  public orderNewest(projects: Array<IProjectImage>) {
    if (projects) {
      return projects.sort((a, b) => {
        let left: string = String(a.createdAt);
        let right: string = String(b.createdAt);

        if (left < right) {
          return -1;
        }
        if (left > right) {
          return 1;
        }

        return 0;
      });
    }
  }

  private percentInvested(project: IProjectImage): number {
    return (project.investedIn / project.goal) * 100;
  }


}
