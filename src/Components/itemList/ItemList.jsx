import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({productos}) => {
  return (
    <div className='itemliststyle'>
        {productos.map(item => <Item key={item.id} {...item}/>)} {/*porcada elemento del array, mapeo*/}
    </div>
  )
}

export default ItemList