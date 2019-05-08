import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkLaptopItemComponent } from './homework-laptop-item.component';

describe('HomeworkLaptopItemComponent', () => {
  let component: HomeworkLaptopItemComponent;
  let fixture: ComponentFixture<HomeworkLaptopItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkLaptopItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkLaptopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
