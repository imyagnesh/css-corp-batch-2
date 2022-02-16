import {useRouter} from 'next/router'


type Props = {}

const Product = (props: Props) => {
  const router = useRouter()
  
  const {product} = router.query;
  console.log(product);
  
  return (
    <div>Product</div>
  )
}

export default Product