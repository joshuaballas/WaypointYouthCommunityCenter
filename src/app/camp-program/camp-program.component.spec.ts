import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampProgramComponent } from './camp-program.component';

describe('CampProgramComponent', () => {
  let component: CampProgramComponent;
  let fixture: ComponentFixture<CampProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
