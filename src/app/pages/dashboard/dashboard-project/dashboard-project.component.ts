import { Component, OnInit, Input } from '@angular/core';
import { IProjectImage } from 'src/app/core/api/models/models';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { getLocaleNumberFormat, NumberFormatStyle, formatNumber } from '@angular/common';

@Component({
  selector: 'dashboard-project',
  templateUrl: './dashboard-project.component.html',
  styleUrls: ['./dashboard-project.component.scss']
})
export class DashboardProjectComponent implements OnInit {

  @Input('project')
  private _project: IProjectImage;

  @Input('class')
  private _class: string;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    //console.log(this._project);
  }

  public trustUrl(image: string): SafeUrl {
    if(image !== null) {
      return this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
    }
  }

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

}
