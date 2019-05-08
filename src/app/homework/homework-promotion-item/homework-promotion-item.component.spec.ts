import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkPromotionItemComponent } from './homework-promotion-item.component';

describe('HomeworkPromotionItemComponent', () => {
  let component: HomeworkPromotionItemComponent;
  let fixture: ComponentFixture<HomeworkPromotionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkPromotionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkPromotionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
