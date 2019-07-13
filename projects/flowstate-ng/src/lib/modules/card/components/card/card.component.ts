import {Component, Input, OnInit} from '@angular/core';
import {FlowCardService} from '../../services/flow-card.service';

@Component({
  selector: 'flw-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [FlowCardService]
})
export class CardComponent implements OnInit {

  @Input() cardShadow: 'light' | 'dark';
  @Input() cardColor: 'primary' | 'accent' | 'danger';

  constructor(private flowCardService: FlowCardService) {
  }

  ngOnInit() {
    // REFACTOR: Remove the interface for the cardShadow and cardColor variables, change to string.
    //  They will only ever arrive as the the defined type in the @Input
    this.flowCardService.cardShadow = this.cardShadow;
    this.flowCardService.cardColor = this.cardColor;
  }

}
