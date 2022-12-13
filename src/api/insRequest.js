import ins from '@/api/request';

export async function getList(page) {
  const resp = await ins().get('/getList.php', {
    params: {
      page,
    },
  });
  return resp;
}

export async function getBanner() {
  const resp = await ins().get('/getList.php', {
    params: {
      tejian: true,
    },
  });
  return resp;
}
