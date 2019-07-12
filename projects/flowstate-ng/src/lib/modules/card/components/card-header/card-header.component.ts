import {Component, OnInit} from '@angular/core';
import {CardComponentOrigin} from '../../types/card-main.type';

@Component({
  selector: 'flw-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
})
export class CardHeaderComponent implements OnInit {

  origin = CardComponentOrigin.header;

  constructor() {
  }

  ngOnInit() {
  }

}
