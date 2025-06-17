import { Suspense, use } from "react";

const Products =()=> fetch("https://dummyjson.com/products").then((response) => response.json()) .then(data => data.products); 
const ProductsLlist = Products();
console.log(ProductsLlist)
export default function Practice(){
    return(
        <>
            <ul>
                <Suspense fallback={<p>loading.....</p>}>
                    <Product showProducts={ProductsLlist} />
                </Suspense>
            </ul>
        </>
    )
}
 
const Product =({showProducts})=>{
    const productData = use(showProducts);
    return(
        <>
            <ul>
                {
                    productData.map((item, index)=>(
                        <li key={index}> {item.price} - {item.title}</li>
                    ))
                }
            </ul>
        </>
    )
}