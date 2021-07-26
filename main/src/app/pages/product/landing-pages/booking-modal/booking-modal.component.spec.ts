import { ActivatedRoute, Data } from '@angular/router';
import { TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { bookingModalComponent } from './booking-modal.component';

describe('leadFormMini', () => {
  /**
   * Provide our implementations or mocks to the dependency injector
   */
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      /**
       * Provide a better mock.
       */
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      bookingModalComponent
    ]
  }));


});
