import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;
// Contain IMG & INFO
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({ padding : "10px", flexDirection: "column" })}

`;
///Element of Img Container
const ImgContainer = styled.div`
    flex:1;
`;
////1
const Image = styled.img`
    width : 100%
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh"})}


`;
///Element of info Container

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({ padding : "10px" })}

`;
////1
const Title = styled.h1`
    font-weight : 200;
`;
////2
const Describtion = styled.p`
    margin : 20px 0px;
`;
////3
const Price = styled.span`
    font-weight:100 ;
    font-size:40px;
    
`;
///Element of Filter Container

const FilterContainer = styled.div`
    width :50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight:200; 
`;

const FilterColor = styled.div`
    width : 20px;
    height: 20px;
    margin: 0px 5px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    cursor: pointer;
    `;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width :50%;
    display : flex;
    align-items : center ;
    justify-content : space-between ;
    ${mobile({ width: "100%" })}

`;

const AmountContainer = styled.div`
    display : flex;
    align-center : center;
    font-weight: 700; 
`;

const Amount = styled.span`
    width : 30px; 
    height: 30px;
    border-radius : 10px ;
    border:1px solid #800000;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding:15px;
    border: 2px solid #800000;
    background-color: white;
    cursor: pointer;
    font-weight: 500; 

    &:hover{
        background-color: #e6e6e6;
    }
`;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="/imgs/ac.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Al Ahly Red T-Shirt</Title>
                <Describtion>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Fugit laudantium necessitatibus dolorum voluptates iusto natus vitae voluptatum commodi aliquid,
                     culpa ratione quia, adipisci repudiandae accusamus placeat, expedita deserunt et obcaecati?
                </Describtion>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="red" />
                        <FilterColor color="black" />
                        <FilterColor color="gold" />
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>


        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
