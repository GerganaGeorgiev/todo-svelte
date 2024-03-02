export type StoreSubscription = {
  (): void;
  unsubscribe?: any;
};

export type TodoColors = "red" | "green" | "blue" | "yellow";
export type Filter = "resolved" | "unresolved" | "none" | TodoColors;
