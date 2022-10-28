import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";

export const selectUser = createSelector(
    (state: AppState) => state.userState,
    (state) => state.user
);
