"use client";

import { useEffect, useState } from "react";

export default function SearchBar({ products }: { products: Product[] }) {
  const [name, setName] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [fProducts, setFProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(name);
    }, 1500);

    const filterProduct = (debouncedValue: string) => {
      if (debouncedValue.length < 1) return;
      setLoading(true);
      const product = products?.filter((item) =>
        item?.name.toLowerCase().includes(debouncedValue.toLowerCase())
      );
      setFProducts(product);
      console.log("fp", product);
      setLoading(false);
      setFound(product?.length > 1);
      return product;
    };
    filterProduct(debouncedValue);

    return () => {
      clearTimeout(handler);
    };
  }, [name, debouncedValue, products]);

  return (
    <section className="p-6">
      <h1 className="text-sm font-semibold">Search Product Here</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e?.target.value)}
        className="w-full mt-2 text-black text-lg rounded px-4 py-2"
        placeholder="Enter Product Name"
      />
      <button
        onClick={() => {
          setName("");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }}
        className="text-white font-bold px-4 py-2 mt-3 rounded shadow border"
        type="button"
      >
        Clear
      </button>
      {debouncedValue.length > 1 && loading ? (
        <h1 className="text-white font-bold text-3xl text-center">
          Loading...
        </h1>
      ) : fProducts?.length > 1 ? (
        <div className="capitalize border p-6 rounded shadow mt-5">
          <h1 className="text-2xl font-semibold">
            Name : {fProducts[0]?.name}
          </h1>
          <p className="text-lg">Description : {fProducts[0]?.description}</p>
          <p className="text-sm font-semibold">
            Price : $ {fProducts[0]?.price}
          </p>
        </div>
      ) : (
        !found && "Not Found"
      )}
    </section>
  );
}
