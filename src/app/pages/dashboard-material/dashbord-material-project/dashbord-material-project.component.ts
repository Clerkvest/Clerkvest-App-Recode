import {Component, Input, OnInit} from '@angular/core';
import {IProjectImage} from '../../../core/api/models/IProjectImage';
import {LoggerService} from '../../../core/utils/logger/logger.service';
import {SubscriptionService} from '../../../core/utils/subscription/subscription.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-dashbord-material-project',
  templateUrl: './dashbord-material-project.component.html',
  styleUrls: ['./dashbord-material-project.component.scss']
})
export class DashbordMaterialProjectComponent implements OnInit {

  private _logger: LoggerService;
  private _subscription: SubscriptionService;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this._logger = LoggerService.build(DashbordMaterialProjectComponent.name);
    this._subscription = new SubscriptionService();
  }

  @Input('project')
  private _project: IProjectImage;

  /**
   * Getter project
   * @return {IProjectImage}
   */
  public get project(): IProjectImage {
    return this._project;
  }

  /**
   * Setter project
   * @param {IProjectImage} value
   */
  public set project(value: IProjectImage) {
    this._project = value;
  }

  @Input('class')
  private _class: string;

  /**
   * Getter class
   * @return {string}
   */
  public get class(): string {
    return this._class;
  }

  /**
   * Setter class
   * @param {string} value
   */
  public set class(value: string) {
    this._class = value;
  }

  ngOnInit(): void {
    this._logger.debug('Creating card for project: ' + this.project.id + ' - ' + this._project.title);
  }

  public trustUrl(image: string): SafeUrl {
    if (image !== null) {
      return this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
    }
  }

}
