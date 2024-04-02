export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Deatils about product {params.productId}</h1>;
}
