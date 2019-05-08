import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkPromotionComponent } from './homework-promotion.component';

describe('HomeworkPromotionComponent', () => {
  let component: HomeworkPromotionComponent;
  let fixture: ComponentFixture<HomeworkPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
