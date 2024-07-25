export default function SearchBar() {
  return (
    <section className="p-6">
      <h1 className="text-sm font-semibold">Search Product Here</h1>
      <input
        type="text"
        className="w-full mt-2 text-black text-lg rounded px-4 py-2"
        placeholder="Enter Product Name"
      />
    </section>
  );
}
