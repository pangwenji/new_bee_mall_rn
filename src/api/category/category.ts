import {connectService} from '@/utils/http';
//home 获取信息
export const getCategoryListData = async () => {
  return connectService('GET', '/categories');
};
