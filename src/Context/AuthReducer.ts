interface State {
  user: { id: string; email: string } | null;
  loading: boolean;
}

type Action =
  | { type: "LOGIN"; payload: { id: string; email: string } }
  | { type: "LOGOUT" }
  | { type: "LOADING"; payload: boolean };

export const AuthReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN":
      console.log("logged in");
      return { ...state, user: action.payload, loading: false };
    case "LOGOUT":
      console.log("logged out");
      return { ...state, user: null, loading: false };
    case "LOADING":
      console.log("loading");
      return { ...state, loading: action.payload };
    default:
      console.log("default");
      return state;
  }
};
