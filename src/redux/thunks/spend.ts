// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setSpend } from "../slices/spend-slice";

// Types
import { Spend } from "../../types";

// Spend
import { SupabaseRepository } from "../../modules/spend/infraestructure/SupabaseRepository";
import { create } from "../../modules/spend/application/Service";

const repository = SupabaseRepository();

export const createSpend = createAsyncThunk(
  "spends/createSpend",
  async (newSpend: Spend, thunkApi) => {
    const createNewSpend = await create(repository, newSpend);

    // Update spend in store
    thunkApi.dispatch(setSpend(newSpend));
  }
);
