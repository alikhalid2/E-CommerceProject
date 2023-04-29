import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Title = styled.h1`
padding:10px;
`;
const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Title>Categories</Title>
        <Categories/>
        <Title>Popular Products</Title>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home;
