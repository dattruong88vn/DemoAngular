import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkSlideComponent } from './homework-slide.component';

describe('HomeworkSlideComponent', () => {
  let component: HomeworkSlideComponent;
  let fixture: ComponentFixture<HomeworkSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
