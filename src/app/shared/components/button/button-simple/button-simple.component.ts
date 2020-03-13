import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-simple',
  templateUrl: './button-simple.component.html',
  styleUrls: ['./button-simple.component.scss']
})
export class ButtonSimpleComponent implements OnInit {

  @Input() label = 'Missing Label';

  @Input() theme = 'gray';

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitOnClick() {
    this.onClick.emit();
  }

}
