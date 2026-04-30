import { getProductByHandle, getProducts } from "../../../lib/shopify";
import { ProductPage } from "../../../components/ProductPage";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = await getProductByHandle(slug);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "4rem" }}>
        <h1>Product not found</h1>
        <p>The product you are looking for is not available.</p>
        <a href="/" className="primary-button">Return home</a>
      </div>
    );
  }

  return <ProductPage product={product} />;
}
