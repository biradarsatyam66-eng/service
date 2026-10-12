import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post2DashboardComponent } from './post2-dashboard.component';

describe('Post2DashboardComponent', () => {
  let component: Post2DashboardComponent;
  let fixture: ComponentFixture<Post2DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post2DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post2DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
