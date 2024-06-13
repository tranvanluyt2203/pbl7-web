import phone from "../../../assets/img/product/xvybrlcyllnt1.jpg";

import "./Product.scss";

const ProductPage = () => {
  return (
    <>
      <div className="productPage__container">
        <div className="productPage__content">
          <div className="productPage__header">
            
            <div className="imageSingle">
              <img src={phone} alt="" />
            </div>
            <div className="info">
              <div className="name">
                Item Name Item Name Item Name Item Name
              </div>
              <div className="price"> 9.999.999đ </div>
              <div className="link">
                <a href="#" className="goto_button">Tới nơi bán</a>
              </div>
            </div>
          </div>
          
          <div className="productPage__info">
            <div className="description">
              <div className="header">Thông tin sản phẩm</div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum aliquam mi quis suscipit finibus. Nunc dolor justo,
                  imperdiet eget tempor sit amet, vulputate sit amet massa.
                  Donec tempus dapibus finibus. Sed vitae venenatis augue. Ut
                  diam sapien, efficitur vitae lectus vel, consequat lobortis
                  lectus. Sed lectus odio, posuere ac ligula eget, molestie
                  vulputate dolor. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Cras
                  cursus, orci non placerat maximus, velit turpis pulvinar
                  mauris, vel consectetur augue neque vitae nulla. Vivamus mi
                  mauris, vulputate vel tincidunt nec, fermentum quis ligula.
                  Phasellus condimentum suscipit ex sit amet aliquet. Fusce
                  facilisis consectetur dolor. Integer volutpat faucibus elit
                  nec viverra.
                </p>
                <p>
                  Nulla sagittis, velit vel venenatis pharetra, mauris enim
                  gravida justo, et blandit mi enim sed tellus. Sed ex elit,
                  pulvinar eget iaculis quis, semper vel eros. Quisque blandit
                  luctus mauris, ut hendrerit ex cursus rutrum. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Cras euismod quis nisl nec gravida. Aenean eros
                  orci, aliquam vitae semper eu, euismod vel nisi. Sed eu augue
                  ac sapien euismod sodales at et neque. Pellentesque posuere,
                  ante et dictum luctus, nulla nisl elementum purus, sit amet
                  rutrum lacus purus non tellus. Fusce commodo, odio in ornare
                  dictum, nibh orci dapibus ligula, iaculis faucibus magna orci
                  et mi.
                </p>
                <p>
                  Nulla facilisi. Phasellus nunc augue, cursus eget fermentum
                  ac, elementum sed tellus. Quisque id neque ac dolor accumsan
                  commodo ac sagittis nisl. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Sed dictum est eget efficitur luctus. Integer ut
                  interdum purus. Praesent ut leo consectetur, porttitor dolor
                  non, tempus urna. Integer ut maximus enim. Donec congue varius
                  leo, vitae dignissim ipsum dapibus vitae. Nam a orci accumsan,
                  placerat nibh eget, dignissim risus. Etiam velit leo,
                  condimentum sit amet nulla nec, sagittis pellentesque ipsum.
                  Phasellus tortor nunc, mollis ac libero ac, euismod euismod
                  arcu. Sed tincidunt quam quis rhoncus congue. Donec sed
                  laoreet ipsum. In dignissim vitae arcu sed ornare. Maecenas
                  velit elit, tristique ut feugiat ac, condimentum ac lacus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
