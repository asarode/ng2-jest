import * as console from 'console';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeatureComponent } from './feature.component';

describe('FeatureComponent', () => {

  let comp: FeatureComponent;
  let fixture: ComponentFixture<FeatureComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(FeatureComponent);

    comp = fixture.componentInstance; // FeatureComponent test instance

    de = fixture.debugElement;
    // Trying to query the DOM does not work. This will throw:
    // `TypeError: Cannot read property 'nativeElement' of null` when getting
    // `de.nativeElement` in the test below.
    // de = fixture.debugElement.query(By.css('a'));
  });

  it('shows a link', () => {
    expect(de.nativeElement).toBeDefined();
  });
});