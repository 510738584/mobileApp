import ins from './request';

export default async function () {
  const resp = await ins({
    url: '/getList.php',
    params: {
      tejian: true,
    },
  });
  return resp;
}
