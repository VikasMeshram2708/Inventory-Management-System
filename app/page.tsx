import GetProducts from "@/actions/GetProducts";
import ProductForm from "@/components/ProductForm";
import ProductTable from "@/components/ProductTable";
import SearchBar from "@/components/Searchbar";

export default async function Home() {
  const ProductData = GetProducts();
  const products: Product[] = await ProductData;

  return (
    <main className="min-h-screen">
      <div className="container mx-auto">
        {/* Search Bar */}
        <SearchBar products={products}/>

        {/* Add Form */}
        <ProductForm />

        {/* Product Table */}
          <ProductTable products={products} />
      </div>
    </main>
  );
}
