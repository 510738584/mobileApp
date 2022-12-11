import ins from '@/api/request';

export async function getBanner() {
  const resp = await ins().get('/getList.php', {
    params: {
      tejian: true,
    },
  });
  return resp;
}
// 获取首页展示推荐

export async function getRecom() {
  const resp = await ins().get('/getRecom.php', {
    params: {
      num: 8,
    },
  });
  return resp;
}

export async function getArticle() {
  const resp = await ins().get('/getArticle.php', {
  });
  return resp;
}
