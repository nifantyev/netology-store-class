import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from '../models/ShopItem';

const propTypes = {
  item: PropTypes.instanceOf(ShopItem).isRequired,
};

class ShopItemClass extends React.Component {
  constructor({ item }) {
    super();
    this.item = item;
  }

  render() {
    return (
      <div className="main-content">
        <h2>{this.item.brand}</h2>
        <h1>{this.item.title}</h1>
        <h3>{this.item.description}</h3>
        <div className="description">{this.item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">
            {this.item.currency}
            {this.item.price.toFixed(2)}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = propTypes;

export default ShopItemClass;
