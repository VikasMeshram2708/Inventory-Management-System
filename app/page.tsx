import ProductForm from "@/components/ProductForm";
import ProductTable from "@/components/ProductTable";
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
        <ProductTable />
      </div>
    </main>
  );
}
