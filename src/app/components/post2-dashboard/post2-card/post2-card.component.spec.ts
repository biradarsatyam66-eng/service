import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post2CardComponent } from './post2-card.component';

describe('Post2CardComponent', () => {
  let component: Post2CardComponent;
  let fixture: ComponentFixture<Post2CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post2CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
