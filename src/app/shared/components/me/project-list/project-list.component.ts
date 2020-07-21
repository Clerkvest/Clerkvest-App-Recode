import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProject} from '../../../../core/api/models/IProject';
import {ProjectRepositoryService} from '../../../../core/api/repository/project/project-repository.service';
import {LoggerService} from '../../../../core/utils/logger/logger.service';
import {SubscriptionService} from '../../../../core/utils/subscription/subscription.service';
import {LocalizationService} from '../../../../core/utils/localization/localization.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  private _logger: LoggerService;
  private _subscriptionService: SubscriptionService;

  constructor(
    private _projectRepository: ProjectRepositoryService,
    private _localizationService: LocalizationService) {
  }

  private _projects: Array<IProject> = [];

  get projects(): Array<IProject> {
    return this._projects;
  }

  set projects(value: Array<IProject>) {
    this._projects = value;
  }

  ngOnInit(): void {
    this._logger = LoggerService.build(ProjectListComponent.name);
    this._subscriptionService = new SubscriptionService();
    //this._userRepo.getMyself().toPromise().then(loadUserDetails(value))

    this._subscriptionService.add(this._projectRepository.getAllSelf().subscribe(
      response => {
        this._projects = response;
      }
    ), 'MeComponent#ngOnInit');
  }

  ngOnDestroy(): void {
    this._subscriptionService.unsubscribe();
  }

  get localizationService(): LocalizationService {
    return this._localizationService;
  }
}
