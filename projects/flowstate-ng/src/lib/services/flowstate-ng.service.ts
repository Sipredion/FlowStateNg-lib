import {Inject, Injectable} from '@angular/core';
import {FlowTheme} from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class FlowstateNgService {

  applicationTheme: FlowTheme;

  constructor(@Inject('theme') private theme: FlowTheme) {
    this.applicationTheme = theme;
    // Set default dark color
    this.applicationTheme.dark = '0, 0, 0';
  }
}
