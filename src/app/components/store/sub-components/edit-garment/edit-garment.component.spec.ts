import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGarmentComponent } from './edit-garment.component';

describe('EditGarmentComponent', () => {
  let component: EditGarmentComponent;
  let fixture: ComponentFixture<EditGarmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGarmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGarmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
