import ins from '@/api/request';

export async function getArticle(page = 1) {
  const resp = await ins().get('/getArticle.php', {
    params: {
      num: 9,
      page,
    },
  });
  return resp;
}

export async function getList() {
  const resp = await ins().get('', {
    params: {

    },
  });
  return resp;
}
