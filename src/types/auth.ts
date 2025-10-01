export interface AuthState {
  isLoggedIn: boolean;
  user: any | null;
  token: string | null;
}
