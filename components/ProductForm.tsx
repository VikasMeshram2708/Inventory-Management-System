export default function ProductForm() {
    return (
      <section className="p-6">
        <form
          action=""
          className="shadow-md border rounded p-5 space-y-6"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                className="block w-full border-gray-300 rounded-md shadow-sm text-black px-4 py-2"
                type="text"
                name="name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-200">
                Description
              </label>
              <textarea
                name="description"
                className="block w-full border-gray-300 rounded-md shadow-sm text-black px-4 py-2"
                rows={1}
              ></textarea>
            </div>
            <div className="space-y-2">
              <label htmlFor="price" className="block text-sm font-medium text-gray-200">
                Price
              </label>
              <input
                className="block w-full border-gray-300 rounded-md shadow-sm text-black px-4 py-2"
                type="number"
                name="price"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-medium text-gray-200">
              Category
            </label>
            <select
              name="category"
              className="block w-full border-gray-300 rounded-md shadow-sm bg-transparent text-white border px-4 py-2"
            >
              <option className="bg-slate-950 p-2" value="accessories">
                Accessories
              </option>
              <option className="bg-slate-950 p-2" value="electronics">
                Electronics
              </option>
              <option className="bg-slate-950 p-2" value="fashion">
                Fashion
              </option>
              <option className="bg-slate-950 p-2" value="kitchen_appliances">
                Kitchen Appliances
              </option>
              <option className="bg-slate-950 p-2" value="sports">
                Sports
              </option>
            </select>
          </div>
          <div className="pt-4">
            <button
              type="button"
              className="w-full bg-slate-900 text-white border border-transparent rounded-md py-2 shadow-sm hover:bg-slate-700"
            >
              Add
            </button>
          </div>
        </form>
      </section>
    );
  }
  