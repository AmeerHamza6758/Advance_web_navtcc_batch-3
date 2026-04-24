import React, { Fragment } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Card from '../components/Card'
import './Sales.css'
function Sales() {

    const salesCardsData = [
    {
        id: 1,
        title: "Embroidered Lawn Suit",
        category: "Ready to Wear",
        price: "₨ 8,990",
        originalPrice: "₨ 12,990",
        discount: "31% off",
        rating: 4.5,
        reviewCount: 127,
        imageUrl: "https://pk.khaadi.com/cdn/shop/files/example-lawn-suit-1.jpg", // 🔁 Replace with actual URL
        productUrl: "https://pk.khaadi.com/products/embroidered-lawn-suit-001"
    },
    {
        id: 2,
        title: "Chiffon Festive Kurta",
        category: "Festive Wear",
        price: "₨ 11,490",
        originalPrice: null,
        discount: null,
        rating: 4.8,
        reviewCount: 89,
        imageUrl: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw752db6a3/images/hi-res/1-26-206-a-h1_multi_2.jpg?sw=400&sh=600", // 🔁 Replace with actual URL
    },
    {
        id: 3,
        title: "Woven Trousers",
        category: "Bottoms",
        price: "₨ 4,990",
        originalPrice: "₨ 6,490",
        discount: "23% off",
        rating: 4.3,
        reviewCount: 204,
        imageUrl: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwf2380ea5/images/hi-res/8-26-204-a-c1_multi_2.jpg?sw=400&sh=600", // 🔁 Replace with actual URL
    },
    {
        id: 4,
        title: "Unstitched Printed Lawn",
        category: "Unstitched",
        price: "₨ 4,290",
        originalPrice: null,
        discount: null,
        rating: 4.6,
        reviewCount: 312,
        imageUrl: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw5557f51d/images/hi-res/2-26-209-a-d1_multi_2.jpg?sw=400&sh=600", // 🔁 Replace with actual URL
        productUrl: "https://pk.khaadi.com/products/unstitched-printed-lawn-004"
    },
    {
        id: 5,
        title: "Embroidered Organza Shirt",
        category: "Ready to Wear",
        price: "₨ 7,990",
        originalPrice: "₨ 10,990",
        discount: "27% off",
        rating: 4.7,
        reviewCount: 75,
        imageUrl: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw55f8853c/images/hi-res/1-26-213-a-j1_multi_2.jpg?sw=400&sh=600", // 🔁 Replace with actual URL
    }
];

    return (
        <div className='sales-container'>
            {
                salesCardsData.map((item, index) => (
                    <Card data={item}/>
                ))
            }        </div>
    )
}

export default Sales