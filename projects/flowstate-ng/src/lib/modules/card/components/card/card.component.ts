import {Component, Input, OnInit} from '@angular/core';
import {FlowCardService} from '../../services/flow-card.service';
import {CardColorType, CardShadowType} from '../../types/card-main.type';

@Component({
  selector: 'flw-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [FlowCardService]
})
export class CardComponent implements OnInit {

  @Input() cardShadow: CardShadowType;
  @Input() cardColor: CardColorType;

  constructor(private flowCardService: FlowCardService) {
  }

  ngOnInit() {
    this.flowCardService.cardShadow = this.cardShadow;
    this.flowCardService.cardColor = this.cardColor;
  }

}
