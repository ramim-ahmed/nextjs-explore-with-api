import ProductList from "./ProductList";

const Shops = ({ products }) => {
  return (
    <section classNmae="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((pd) => (
            <ProductList key={pd.id} product={pd} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shops;
