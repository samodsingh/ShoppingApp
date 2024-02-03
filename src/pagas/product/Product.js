import React from 'react';
import './Product.css';
import Cards from "../procard/Cards";
import CardData from "../procard/Carddata"

function pcard(val) {
    console.log('val---==', val);

}
function Product() {
    return (
        <>
        <div className='card_description'>
            <Cards
                imgscr={CardData[0].imgscr}
                sname={CardData[0].sname}
                title={CardData[0].title}
                price={CardData[0].price}
                btn_title={CardData[0].btn_title}
            />
            <Cards
                imgscr={CardData[1].imgscr}
                sname={CardData[1].sname}
                title={CardData[1].title}
                price={CardData[1].price}
                btn_title={CardData[1].btn_title}
            />
            <Cards
                imgscr={CardData[2].imgscr}
                sname={CardData[2].sname}
                title={CardData[2].title}
                price={CardData[2].price}
                btn_title={CardData[2].btn_title}
            />
            <Cards
                imgscr={CardData[3].imgscr}
                sname={CardData[3].sname}
                title={CardData[3].title}
                price={CardData[3].price}
                btn_title={CardData[3].btn_title}
            />       
            <Cards
                imgscr={CardData[0].imgscr}
                sname={CardData[0].sname}
                title={CardData[0].title}
                price={CardData[0].price}
                btn_title={CardData[0].btn_title}
            />
            <Cards
                imgscr={CardData[1].imgscr}
                sname={CardData[1].sname}
                title={CardData[1].title}
                price={CardData[1].price}
                btn_title={CardData[1].btn_title}
            />
            <Cards
                imgscr={CardData[2].imgscr}
                sname={CardData[2].sname}
                title={CardData[2].title}
                price={CardData[2].price}
                btn_title={CardData[2].btn_title}
            />
            <Cards
                imgscr={CardData[3].imgscr}
                sname={CardData[3].sname}
                title={CardData[3].title}
                price={CardData[3].price}
                btn_title={CardData[3].btn_title}
            />       
            </div>
            {CardData.map(pcard)}
        </>
    )
}

export default Product


