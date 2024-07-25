import ProductForm from "@/components/ProductForm";
import SearchBar from "@/components/Searchbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto">
        {/* Search Bar */}
        <SearchBar />

        {/* Add Form */}
        <ProductForm />
        {/* Product Table */}
      </div>
    </main>
  );
}
