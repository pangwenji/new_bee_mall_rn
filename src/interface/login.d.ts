/**
 * 登录模块的声明空间
 */
declare namespace LOGIN {
  type loginType = 'SUCCESS' | 'ERROR';
  type IndexStackParams = {
    Root: undefined | String;
    Detail: undefined;
  };
  interface LoginToken {
    tokenFlag: loginType;
    tokenPlayloan: {};
  }
}
