import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantInventoryComponent } from './plant-inventory.component';

describe('PlantInventoryComponent', () => {
  let component: PlantInventoryComponent;
  let fixture: ComponentFixture<PlantInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
