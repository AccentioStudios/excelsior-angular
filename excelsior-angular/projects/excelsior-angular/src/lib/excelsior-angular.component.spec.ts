import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelsiorAngularComponent } from './excelsior-angular.component';

describe('ExcelsiorAngularComponent', () => {
  let component: ExcelsiorAngularComponent;
  let fixture: ComponentFixture<ExcelsiorAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcelsiorAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcelsiorAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
