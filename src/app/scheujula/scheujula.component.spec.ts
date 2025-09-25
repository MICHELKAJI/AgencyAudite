import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheujulaComponent } from './scheujula.component';

describe('ScheujulaComponent', () => {
  let component: ScheujulaComponent;
  let fixture: ComponentFixture<ScheujulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheujulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheujulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
