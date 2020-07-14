import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Getter state
   * @return {number}
   */
  public get hasProfileImage(): boolean {
    return false;
  }
}
