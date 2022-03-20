import globalAxios from '../api';

export const connectService = async (method: any, api, data?: any) => {
  return await new globalAxios().fetch(method, api, data);
};
