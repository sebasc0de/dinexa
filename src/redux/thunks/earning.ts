// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setEarning } from "../slices/earning-slice";

// Types
import { Earning } from "../../types";

// Spend
import { SupabaseRepository } from "../../modules/earning/infraestructure/SupabaseRepository";
import { create } from "../../modules/earning/application/Service";

const repository = SupabaseRepository();

export const createEarning = createAsyncThunk(
  "earnings/createEarning",
  async (newEarning: Earning, thunkApi) => {
    const createNewEarning = await create(repository, newEarning);

    thunkApi.dispatch(setEarning(newEarning));
  }
);
