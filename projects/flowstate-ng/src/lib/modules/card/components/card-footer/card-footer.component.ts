import {Component, OnInit} from '@angular/core';
import {FlowCardService} from '../../services/flow-card.service';

@Component({
  selector: 'flw-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
})
export class CardFooterComponent implements OnInit {

  constructor(private flowCardService: FlowCardService) {
  }

  ngOnInit() {
  }

}
