import {Component, OnInit} from '@angular/core';
import {CardComponentOrigin} from '../../types/card-main.type';
import {FlowCardService} from '../../services/flow-card.service';

@Component({
  selector: 'flw-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
})
export class CardFooterComponent implements OnInit {

  origin = CardComponentOrigin.footer;

  constructor(private flowCardService: FlowCardService) {
  }

  ngOnInit() {
  }

}
