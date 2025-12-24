export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {products.map((p, i) => (
        <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-xl">
          <h3 className="font-semibold">{p.name}</h3>
          <div className="flex gap-2 mt-4">
            <a href={p.amazon} target="_blank">Amazon</a>
            <a href={p.flipkart} target="_blank">Flipkart</a>
            <a href={p.myntra} target="_blank">Myntra</a>
          </div>
        </div>
      ))}
    </div>
  );
}
