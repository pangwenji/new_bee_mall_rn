import {connectService} from '@/utils/http';
// import {Login} from '@/constants/login';
//获取Token方法
export const getUserParam = async (param: any) => {
  return connectService('GET', '/web/use/name/', param);
};
