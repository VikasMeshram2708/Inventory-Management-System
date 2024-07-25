const BASE_URL = process.env.BASE_URL as string;

export default async function GetProducts() {
  const res = await fetch(`${BASE_URL}/api/getproducts`);
  if (!res.ok) return undefined;
  const result = await res.json();
  return result?.products;
}
