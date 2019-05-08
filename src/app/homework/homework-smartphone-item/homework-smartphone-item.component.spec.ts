import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkSmartphoneItemComponent } from './homework-smartphone-item.component';

describe('HomeworkSmartphoneItemComponent', () => {
  let component: HomeworkSmartphoneItemComponent;
  let fixture: ComponentFixture<HomeworkSmartphoneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkSmartphoneItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkSmartphoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
