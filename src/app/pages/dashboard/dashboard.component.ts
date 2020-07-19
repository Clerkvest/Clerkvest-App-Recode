import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectRepositoryService } from 'src/app/core/api/repository/project/project-repository.service';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';
import { SubscriptionService } from 'src/app/core/utils/subscription/subscription.service';
import { Observable } from 'rxjs';
import { IProjectImage } from 'src/app/core/api/models/models';
import { tap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private _logger: LoggerService;
  private _subscription: SubscriptionService;

  private _projectsObservable: Observable<Array<IProjectImage>>;

  constructor(
    private _projectRepository: ProjectRepositoryService

  ) {
    this._logger = LoggerService.build(DashboardComponent.name);
    this._subscription = new SubscriptionService();
  }

  ngOnInit(): void {
    this._projectsObservable = this._projectRepository.getAll();
  }

  ngOnDestroy(): void {

  }

  public orderClose(projects: Array<IProjectImage>) {
    if(projects) {
      return projects.sort((a, b) => {
        return this.percentInvested(b) - this.percentInvested(a);
      });
    }
  }

  public orderNewest(projects: Array<IProjectImage>) {
    if(projects) {
      return projects.sort((a, b) => {
        let left: string = String(a.createdAt);
        let right: string = String(b.createdAt);

        if (left < right)
          return -1;
        if (left > right)
          return 1;

        return 0;
      });
    }
  }

  private percentInvested(project: IProjectImage): number {
    return (project.investedIn / project.goal) * 100;
  }

    /**
     * Getter logger
     * @return {LoggerService}
     */
	public get logger(): LoggerService {
		return this._logger;
	}

    /**
     * Getter subscription
     * @return {SubscriptionService}
     */
	public get subscription(): SubscriptionService {
		return this._subscription;
	}

    /**
     * Getter projectsObservable
     * @return {Observable<Array<IProjectImage>>}
     */
	public get projectsObservable(): Observable<Array<IProjectImage>> {
		return this._projectsObservable;
	}

    /**
     * Setter logger
     * @param {LoggerService} value
     */
	public set logger(value: LoggerService) {
		this._logger = value;
	}

    /**
     * Setter subscription
     * @param {SubscriptionService} value
     */
	public set subscription(value: SubscriptionService) {
		this._subscription = value;
	}

    /**
     * Setter projectsObservable
     * @param {Observable<Array<IProjectImage>>} value
     */
	public set projectsObservable(value: Observable<Array<IProjectImage>>) {
		this._projectsObservable = value;
	}


}
