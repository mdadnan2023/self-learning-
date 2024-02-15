import React from "react";
import { useParams } from "react-router-dom";
import productDetails from "../data/productDetails";

export default function ProdoctDescription() {
  const { productId } = useParams();
  const clickProduct = productDetails.find((prod) => prod.id == productId);

  return (
    <div className="tc ma0 pa4 min-vh-100">
      <div class="product-description-main">
        <div className="product-image-slider w-50">
          <ul class="nav nav-pills">
            <li class="active-image">
              <a data-toggle="pill" href="#menu1" className="active show">
                Menu 1
              </a>
            </li>
            <li>
              <a data-toggle="pill" href="#menu2">
                Menu 2
              </a>
            </li>
            <li>
              <a data-toggle="pill" href="#menu3">
                Menu 3
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div id="menu1" class="tab-pane fade in active-image show active">
              <h3>Menu 1</h3>
            </div>
            <div id="menu2" class="tab-pane fade">
              <h3>Menu 2</h3>
            </div>
            <div id="menu3" class="tab-pane fade">
              <h3>Menu 3</h3>
            </div>
          </div>
        </div>
        <div className="product-description w-50">
          <h1 className="product-desc-title">{clickProduct.name}</h1>
        </div>
      </div>
    </div>
  );
}
