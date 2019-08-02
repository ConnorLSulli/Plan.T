import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantInventoryBarComponent } from './plant-inventory.component';

describe('PlantInventoryBarComponent', () => {
  let component: PlantInventoryBarComponent;
  let fixture: ComponentFixture<PlantInventoryBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantInventoryBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantInventoryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
