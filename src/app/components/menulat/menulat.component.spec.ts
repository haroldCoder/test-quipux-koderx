import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulatComponent } from './menulat.component';

describe('MenulatComponent', () => {
  let component: MenulatComponent;
  let fixture: ComponentFixture<MenulatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenulatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenulatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
