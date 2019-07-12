import {CardShadowType} from '../types/card-main.type';

export class FlowCardUtil {

  public static setCardShadow(shadowType?: CardShadowType, color = '0, 0, 0'): string {
    let shadow: string;
    shadowType.cardShadow === 'dark' ?
      shadow = `0 4px 8px rgba(${color}, 0.5), 0 0 0 1px rgba(${color}, 0.5)` :
      shadowType.cardShadow === 'light' ?
        shadow = `0 1px 2px rgba(${color}, 0.1), 0 0 0 1px rgba(${color}, 0.1)` :
        shadow = `0 2px 4px rgba(${color}, 0.3), 0 0 0 1px rgba(${color}, 0.3)`;
    return shadow;
  }
}
