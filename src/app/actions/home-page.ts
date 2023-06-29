export async function getAllBanners() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/get-banners`,
  );
  const result = await response.json();
  // console.log('result', result);
  return result;
}

export async function getBestSellers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/get-best-sellers`,
  );
  const result = await response.json();
  // console.log('result', result);
  return result;
}


