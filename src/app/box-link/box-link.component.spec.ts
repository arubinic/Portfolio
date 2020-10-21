import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLinkComponent } from './box-link.component';

describe('BoxLinkComponent', () => {
  let component: BoxLinkComponent;
  let fixture: ComponentFixture<BoxLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
