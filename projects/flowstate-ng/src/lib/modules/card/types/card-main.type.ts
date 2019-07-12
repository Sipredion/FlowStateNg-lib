export enum CardComponentOrigin {
  main = 'main',
  header = 'header',
  body = 'body',
  footer = 'footer'
}

export interface CardShadowType {
  cardShadow: 'light' | 'dark';
}

export interface CardColorType {
  cardColor: 'primary' | 'accent' | 'danger' | 'dark';
}
