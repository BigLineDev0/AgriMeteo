import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMap } from './card-map';

describe('CardMap', () => {
  let component: CardMap;
  let fixture: ComponentFixture<CardMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMap],
    }).compileComponents();

    fixture = TestBed.createComponent(CardMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
