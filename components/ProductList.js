import { useRouter } from 'next/router';
const ProductList = ({product}) => {
    const{image, title, category, id, price} = product;
    const router = useRouter();
    const handleProductDetails = () => {
          router.push(`/shop/${id}`)
    }
    return (
        <div onClick={handleProductDetails} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-gray-50 cursor-pointer hover:border hover:border-blue-400 duration-300 hover:shadow-md">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={image} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
          <p className="mt-1">${price}</p>
        </div>
      </div>
    )
}

export default ProductList
