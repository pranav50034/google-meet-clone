import { createStore, combineReducers } from "redux";
import { peerReducer } from "./modules/peer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
   peer: peerReducer,
});



const store = createStore(
   rootReducer,
);

export default store;
