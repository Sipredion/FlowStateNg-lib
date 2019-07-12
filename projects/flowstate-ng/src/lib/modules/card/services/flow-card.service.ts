import {CardColorType, CardShadowType} from '../types/card-main.type';

export class FlowCardService {

  get cardShadow(): CardShadowType {
    return this._cardShadow;
  }

  set cardShadow(value: CardShadowType) {
    this._cardShadow = value;
  }

  get cardColor(): CardColorType {
    return this._cardColor;
  }

  set cardColor(value: CardColorType) {
    this._cardColor = value;
  }

  private _cardShadow: CardShadowType;
  private _cardColor: CardColorType;

  constructor() {
  }
}
