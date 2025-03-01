import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DealsState } from "../../types/dealTypes";
import { api } from "../../config/Api";

const initialState: DealsState = {
  deals: [],
  loading: false,
  error: null,
  dealCreated: false,
  dealUpdated: false,
};

export const createDeal = createAsyncThunk(
  "deals/createDeal",
  async (deal: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/admin/deals", deal, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("created deal", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to create deal"
      );
    }
  }
);

export const getAllDeals = createAsyncThunk(
  "deals/getAllDeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/admin/deals", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("get all deals", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to get all deals"
      );
    }
  }
);

export const updateDeal = createAsyncThunk(
  "deals/updateDeal",
  async (deal: any, { rejectWithValue }) => {
    try {
      const response = await api.put(`/admin/deals/${deal.id}`, deal, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("updated deal", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to update deal"
      );
    }
  }
);

export const deleteDeal = createAsyncThunk(
  "deals/deleteDeal",
  async (dealId: string, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/admin/deals/${dealId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("deleted deal", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete deal"
      );
    }
  }
);

const dealSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    resetDealState: (state) => {
      state.dealCreated = false;
      state.dealUpdated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDeal.fulfilled, (state, action) => {
        state.loading = false;
        state.dealCreated = true;
        state.deals.push(action.payload);
      })
      .addCase(createDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.deals = action.payload;
      })
      .addCase(getAllDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDeal.fulfilled, (state, action) => {
        state.loading = false;
        state.dealUpdated = true;
        const index = state.deals.findIndex(
          (deal) => deal.id === action.payload.id
        );
        if (index !== -1) {
          state.deals[index] = action.payload;
        }
      })
      .addCase(updateDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDeal.fulfilled, (state, action) => {
        state.loading = false;
        state.deals = state.deals.filter(
          (deal) => deal.id?.toString() !== action.meta.arg
        );
      })
      .addCase(deleteDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetDealState } = dealSlice.actions;

export default dealSlice.reducer;
