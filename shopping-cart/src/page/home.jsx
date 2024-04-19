import { useEffect, useState } from "react";
import ProductTitle from "../components/product-title";
import { Circles } from "react-loader-spinner";

export default function Home() {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListofProduct() {
    setLoading(true);
    try {
      const result = await fetch("https://fakestoreapi.com/products");
      const data = await result.json();

      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListofProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {product && product.length ? (
            product.map((productItem) => <ProductTitle product={productItem} />)
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}
