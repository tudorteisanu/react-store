export enum PageRoutes {
  Login = "/auth/login",
  Register = "/auth/register",
  ForgotPassword = "/auth/forgot-password",
  ResetPassword = "/auth/reset-password",
  InvalidResetPassword = "/auth/invalid-reset-token",
  SuccessfulChangesPassword = "/auth/success-password-change",
  About = "/about-us",
  GoodsCreate = "/goods/create",
  GoodsList = "/goods/list",
  Home = "/",
  Error = "/error/:code",
}

export enum ApiRoutes {
  Login = "/auth/login",
  Register = "/auth/register",
  ForgotPassword = "/auth/forgot-password",
  ResetPassword = "/auth/reset-password",
  CheckResetPassword = "/auth/check-reset-token",
  Goods = "/goods",
  Upload = "/upload",
}
