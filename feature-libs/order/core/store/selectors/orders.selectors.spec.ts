import { TestBed } from '@angular/core/testing';
import { select, Store, StoreModule } from '@ngrx/store';
import { OrderHistoryList, StateUtils } from '@spartacus/core';
import { OrderActions } from '../actions/index';
import { ORDER_FEATURE, StateWithOrder } from '../order-state';
import * as fromReducers from '../reducers/index';
import { OrderSelectors } from './index';

const emptyOrder: OrderHistoryList = {
  orders: [],
  pagination: {},
  sorts: [],
};

const mockUserOrders: OrderHistoryList = {
  orders: [],
  pagination: {
    currentPage: 1,
    pageSize: 5,
  },
  sorts: [{ code: 'byPage' }],
};

describe('Orders Selectors', () => {
  let store: Store<StateWithOrder>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(ORDER_FEATURE, fromReducers.getReducers()),
      ],
    });

    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getOrdersLoaderState', () => {
    it('should return orders state', () => {
      let result: StateUtils.LoaderState<OrderHistoryList>;
      store
        .pipe(select(OrderSelectors.getOrdersState))
        .subscribe((value) => (result = value))
        .unsubscribe();

      expect(result).toEqual({
        loading: false,
        error: false,
        success: false,
        value: emptyOrder,
      });
    });
  });

  describe('getOrders', () => {
    it('should return a user Orders', () => {
      let result: OrderHistoryList;
      store
        .pipe(select(OrderSelectors.getOrders))
        .subscribe((value) => (result = value));

      expect(result).toEqual(emptyOrder);

      store.dispatch(new OrderActions.LoadUserOrdersSuccess(mockUserOrders));
      expect(result).toEqual(mockUserOrders);
    });
  });

  describe('getOrdersLoaded', () => {
    it('should return success flag of orders state', () => {
      let result: boolean;
      store
        .pipe(select(OrderSelectors.getOrdersLoaded))
        .subscribe((value) => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new OrderActions.LoadUserOrdersSuccess(mockUserOrders));
      expect(result).toEqual(true);
    });
  });
});
