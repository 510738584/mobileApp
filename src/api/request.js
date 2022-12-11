import axios from 'axios';

export default function () {
  const ins = axios.create({
    baseURL: 'https://ku.qingnian8.com/dataApi/qingKu',
  });
  ins.interceptors.response.use((data) => data.data);
  return ins;
}
