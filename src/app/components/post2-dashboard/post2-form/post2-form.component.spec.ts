import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post2FormComponent } from './post2-form.component';

describe('Post2FormComponent', () => {
  let component: Post2FormComponent;
  let fixture: ComponentFixture<Post2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post2FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
