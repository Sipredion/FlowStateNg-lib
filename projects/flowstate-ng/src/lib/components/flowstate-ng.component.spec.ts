import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowstateNgComponent } from './flowstate-ng.component';

describe('FlowstateNgComponent', () => {
  let component: FlowstateNgComponent;
  let fixture: ComponentFixture<FlowstateNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowstateNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowstateNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
