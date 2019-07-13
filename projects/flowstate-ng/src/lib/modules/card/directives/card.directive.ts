import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {FlowCardService} from '../services/flow-card.service';
import {FlowCardUtil} from '../utils/flow-card-util';
import {CardColorType, CardComponentOrigin, CardShadowType} from '../types/card-main.type';
import {FlowTheme} from '../../../models/theme.model';
import {FlowstateNgService} from '../../../services/flowstate-ng.service';

@Directive({
  selector: '[flwCard]'
})
export class CardDirective implements OnInit {

  @Input() isFrom: CardComponentOrigin;

  cardShadow: CardShadowType;
  cardColor: CardColorType;
  theme: FlowTheme;

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private flowCardService: FlowCardService,
              private libService: FlowstateNgService) {
  }

  ngOnInit() {
    this.cardShadow = this.flowCardService.cardShadow;
    this.cardColor = this.flowCardService.cardColor;
    this.theme = this.libService.applicationTheme;

    if (!this.cardColor) {
      this.cardColor = 'dark';
    }

    if (this.isFrom === 'main') {
      this.setMainCardStyle(this.cardShadow, this.theme[this.cardColor]);
    }

    if (this.isFrom === 'header') {
      this.setCardHeaderStyles(this.theme[this.cardColor]);
    }

    if (this.isFrom === 'footer') {
      this.setCardFooterStyles(this.theme[this.cardColor]);
    }
  }

  private setMainCardStyle(cardShadow: CardShadowType, colorType: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'boxShadow',
      FlowCardUtil.setCardShadow(cardShadow, colorType)
    );
    if (colorType !== '0, 0, 0' || cardShadow === 'light') {
      this.renderer.setStyle(
        this.el.nativeElement,
        'border',
        `1px solid rgba(${colorType}, 0.3)`
      );
    }
  }

  private setCardHeaderStyles(colorType: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'borderBottom',
      `1px solid rgba(${colorType}, 0.3)`
    );
  }

  private setCardFooterStyles(colorType: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'borderTop',
      `1px solid rgba(${colorType}, 0.3)`
    );
  }
}
