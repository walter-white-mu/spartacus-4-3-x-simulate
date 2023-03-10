import {
  PaginationModel,
  ReturnRequest,
  ReturnRequestList,
  SortModel,
} from '@spartacus/core';
import { OrderActions } from '../actions/index';
import * as fromOrderReturnRequestReducer from './order-return-request.reducer';

describe('Order Return Request Reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromOrderReturnRequestReducer;
      const action = {} as OrderActions.OrderReturnRequestAction;
      const state = fromOrderReturnRequestReducer.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS action', () => {
    it('should populate the user Orders state entities', () => {
      const returnRequests: ReturnRequest[] = [{ rma: '01' }, { rma: '02' }];
      const pagination: PaginationModel = {
        currentPage: 1,
        totalPages: 5,
        pageSize: 5,
      };
      const sorts: SortModel[] = [{ code: 'byDate' }];
      const mockUserOrders: ReturnRequestList = {
        returnRequests,
        pagination,
        sorts,
      };

      const { initialState } = fromOrderReturnRequestReducer;
      const action = new OrderActions.LoadOrderReturnRequestListSuccess(
        mockUserOrders
      );
      const state = fromOrderReturnRequestReducer.reducer(initialState, action);

      expect(state).toEqual(mockUserOrders);
    });
  });
});
