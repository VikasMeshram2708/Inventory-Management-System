export default async function ProductTable({
  products,
}: {
  products: Product[];
}) {
  return (
    <section className="container mx-auto p-6">
      <form className="container mx-auto border rounded p-6">
        <table className="table-auto w-full text-left text-sm text-white">
          <thead className="">
            <tr>
              <th className="px-4 py-2">Index</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item, index) => (
              <tr key={item?.id} className="bg-slate-700 hover:bg-slate-600">
                <td className="cursor-pointer border px-4 py-2">
                  {index+1}
                </td>
                <td className="cursor-pointer border px-4 py-2">
                  {item?.name}
                </td>
                <td className="cursor-pointer border px-4 py-2">
                  {item?.description}
                </td>
                <td className="cursor-pointer border px-4 py-2">
                  {item?.category}
                </td>
                <td className="cursor-pointer border px-4 py-2">
                  {item?.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </section>
  );
}
