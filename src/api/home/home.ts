import {connectService} from '@/utils/http';

//home 获取信息
export const getHomeInfo = async () => {
  return connectService('GET', '/index-infos');
};
