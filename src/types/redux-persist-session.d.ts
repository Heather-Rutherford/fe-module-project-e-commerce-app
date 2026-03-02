declare module "redux-persist/lib/storage/session" {
  const storage: {
    getItem: (key: string) => string | null;
    setItem: (key: string, value: string) => void;
    removeItem: (key: string) => void;
  };
  export default storage;
}
