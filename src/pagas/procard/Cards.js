import React from 'react';
import { Button, Card} from 'antd';
import './Cards.css';

const { Meta } = Card;

const Cards = (props) => (

  <>
    <div className='container_cards'>
      <div className='product_col_style'>
          <Card 
            className='pro_card_style'
            hoverable         
            cover={<img alt="example" src={props.imgscr}  style={{height:300}}/>}
          >
            <Meta title={props.sname} description={props.title} />
            <div className='card_description'>
              <div className="price">Price<span>{props.price}</span></div>
              <Button  type="primary" className='card_btn'><a href="#">{props.btn_title}</a></Button>
            </div>
          </Card>
        </div>       
    </div>
  </>

);
export default Cards;