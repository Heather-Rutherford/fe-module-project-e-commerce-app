declare module "redux-persist/lib/persistReducer" {
  import { Reducer } from "redux";
  interface PersistConfig {
    key: string;
    storage: {
      getItem: (key: string) => string | null;
      setItem: (key: string, value: string) => void;
      removeItem: (key: string) => void;
    };
  }
  const persistReducer: (config: PersistConfig, reducer: Reducer) => Reducer;
  export default persistReducer;
}
