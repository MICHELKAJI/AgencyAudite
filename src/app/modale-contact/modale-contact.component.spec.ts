import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleContactComponent } from './modale-contact.component';

describe('ModaleContactComponent', () => {
  let component: ModaleContactComponent;
  let fixture: ComponentFixture<ModaleContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaleContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
