import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ExAccordionDenseComponent } from './accordion-dense.component'

describe('AccordionDenseComponent', () => {
  let component: ExAccordionDenseComponent
  let fixture: ComponentFixture<ExAccordionDenseComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExAccordionDenseComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ExAccordionDenseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
