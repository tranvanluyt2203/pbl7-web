import './ProductBlock.scss'
import '../Product/Product'
import Product from '../Product/Product';

const ProductBlock = () => {
    return (<>
    <div className="productBlock">
        <div className="header">Header</div>
        <div className="content">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
        <div className="expand">
            <a href="#">
                Xem thêm
            </a>
        </div>
    </div>
    </>)
}

export default ProductBlock;