export type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  url: string;
};

export async function fetchShopifyProducts(limit = 10): Promise<Product[]> {
  const res = await fetch(`https://noahny.com/products.json?limit=${limit}`);
  const data = await res.json();

  const simplified: Product[] = data.products.map((p: any) => ({
    id: p.id,
    title: p.title,
    price: p.variants?.[0]?.price || "N/A",
    image: p.images?.[0]?.src || "",
    url: `https://noahny.com/products/${p.handle}`,
  }));

  return simplified;
}
