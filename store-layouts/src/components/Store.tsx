import React from 'react'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'
import type { Product } from '../data/products'

type ViewMode = 'cards' | 'list';

interface StoreProps {
  products: Product[];
}
interface StoreState {
  view: ViewMode;
}

export default class Store extends React.Component<StoreProps, StoreState> {
  state: StoreState = { view: 'cards' };

  handleSwitch = () => {
    this.setState(prev => ({ view: prev.view === 'cards' ? 'list' : 'cards' }));
  };

  render() {
    const { products } = this.props;
    const isCards = this.state.view === 'cards';
   
    const icon: 'view_list' | 'view_module' = isCards ? 'view_list' : 'view_module';

    return (
      <div className="store">
        <IconSwitch icon={icon} onSwitch={this.handleSwitch} />
        {isCards ? <CardsView cards={products} /> : <ListView items={products} />}
      </div>
    );
  }
}
