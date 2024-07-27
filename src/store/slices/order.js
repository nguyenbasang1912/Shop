import {createSlice} from '@reduxjs/toolkit';
import {createOrder, getOrder} from '../thunk/order';
import {data} from '../../example/data/slide';

const initialState = {
  orders: [],
  status: {
    success: false,
    err: false,
    loading: false,
    orderInfo: null,
  },
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    reset: (state, action) => {
      state.status = {
        success: false,
        err: false,
        loading: false,
        orderInfo: null,
      };
    },
    turnOffComment: (state, action) => {
      state.orders = state.orders.map(({title, data}) => {
        return {
          title,
          data: data.map(order => {
            if (order._id === action.payload) {
              return {
                ...order,
                isComment: false,
              };
            }
            return order;
          }),
        };
      });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createOrder.pending, (state, action) => {
        state.status.loading = true;
        state.status.success = false;
        state.status.err = false;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status.loading = false;
        state.status.err = false;
        state.status.success = true;
        state.status.orderInfo = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status.loading = false;
        state.status.success = false;
        state.status.err = action.payload;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        const wrap = list => {
          const dummy = {};
          list.forEach(item => {
            const date = item.updatedAt.split('T')[0];
            if (dummy[date]) {
              dummy[date].push(item);
            } else {
              dummy[date] = [item];
            }
          });

          const arr = [];
          for (const key of Object.keys(dummy)) {
            arr.push({
              title: key,
              data: dummy[key],
            });
          }

          return arr;
        };

        state.orders = wrap(action.payload);
        console.log(state.orders);
      });
  },
});

export const orderReducer = orderSlice.reducer;
export const {reset, turnOffComment} = orderSlice.actions;
