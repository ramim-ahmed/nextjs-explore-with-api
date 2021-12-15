import Layout from "../../components/Layout";
import Shops from "../../components/Shops";

const index = ({ products }) => {
  return (
    <>
      <Layout>
      <div className="my-5 text-2xl font-semibold text-center">All Products</div>
        <Shops products={products} />
      </Layout>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
