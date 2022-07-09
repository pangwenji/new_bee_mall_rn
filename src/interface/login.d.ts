/**
 * 登录模块的声明空间
 */
declare namespace LOGIN {
  type loginType = 'SUCCESS' | 'ERROR';
  type IndexStackParams = {
    Root: undefined | String;
    Detail: undefined;
    Login: undefined;
    ProductList: undefined;
    Order: undefined;
    AboutUS: undefined;
    AccountManager: undefined;
    AddressManager: undefined;
  };
  interface LoginToken {
    tokenFlag: loginType;
    tokenPlayloan: {};
  }
}
