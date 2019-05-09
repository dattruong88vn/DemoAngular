import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkProductItemComponent } from './homework-product-item.component';

describe('HomeworkProductItemComponent', () => {
  let component: HomeworkProductItemComponent;
  let fixture: ComponentFixture<HomeworkProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
