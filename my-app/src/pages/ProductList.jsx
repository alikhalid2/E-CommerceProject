import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
    margin:20px
`;
// element of Filters 
const FilterContainer = styled.div`
    display : flex;
    justify-content: space-between;

`;
///1
const Filter = styled.div`
    margin:20px
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

`;
///2
const FilterText = styled.span`
    font-size  :20;
    font-weight:600;
    margin-right: 20px;  
  

`;
///3
const Select = styled.select`
    padding :10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 5px" })}

`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Products</Title>

        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>

                    <Option disabled selected>Color</Option>

                    <Option>Red</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Gold</Option>
                    <Option>Yellow</Option>

                </Select>
                 <Select>

                    <Option disabled selected>Size</Option>
                    
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                </Select>
            </Filter>

            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>

                <Option  selected>Newest</Option>
                    
                    <Option>Price (asc)</Option>
                    <Option>Price (dasc)</Option>

                </Select>
            </Filter>
        </FilterContainer>

        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
