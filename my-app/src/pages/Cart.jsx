import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
///////////////////////////////////////////////////////////
                    //TOP
//////////////////////////////////////////////////////////
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopTexts = styled.div`
${mobile({ display: "none" })}
`;

const TopText = styled.span`
text-decoration: underline;
cursor :pointer;
margin : 0px 10px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none" };
  background-color: ${props=>props.type === "filled" ? "black" : "transparent" };
  color: ${props=>props.type === "filled" && "white" };
`;
///////////////////////////////////////////////////////////////////////
                //BOTTOM (Info & Price & summary)
///////////////////////////////////////////////////////////////////////
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}

`;

/* ************************ */
/* ******Info Section****** */
/* ************************ */
const Info = styled.div`
flex: 3;

`;
// Elements of INFO Part
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}

`;
/// part of Product 
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
///2
const Image = styled.img`
width: 200px;

`;
///3
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
///4
const ProductName = styled.span``;
///5
const ProductId = styled.span``;
///6
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
`;
///7
const ProductSize = styled.span``;

/* ************************* */
/* ******Price Section****** */
/* ************************* */
const PriceDetail = styled.span`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display : flex;
align-items: center;
margin-bottom:20px;
`;

const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({ margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
font-size  :30px;
font-weight:200;
${mobile({ marginBottom: "20px" })}

`;
 const Hr = styled.hr`
 background-color:#eee;
 border:none;
 height:1px;
 `;

/* ************************* */
/* *****Summary Section***** */
/* ************************* */
const Summary = styled.div`
flex: 1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh
`;

const SummaryTitle = styled.h1`
font-weight:200;
`;
const SummaryItem = styled.div`
margin:30px 0px;
display: flex ;
justify-content: space-between ;
font-weight: ${props=>props.type === "total" && "500"};
font-size  : ${props=>props.type === "total" && "24px"};

`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
width  :100%;
padding:10px;
background-color:black;
color: white;
font-weight: 600;
cursor : pointer;

&:hover{
    background-color: #800000;
}

`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>

        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW !</TopButton>
            </Top>


            <Bottom>
                <Info>


                    <Product>
                        <ProductDetail>
                            <Image src="/imgs/ac.jpg" />

                            <Details>
                               <ProductName>
                                    <b>Product:</b> Al Ahly T-Shirt
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 1907
                                </ProductId>
                                <ProductColor color="red" />
                                <ProductSize>
                                    <b>Size:</b> S
                                </ProductSize>
                            </Details>

                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>

                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>

                    </Product>

                <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src="/imgs/shoes.jpg" />

                            <Details>
                               <ProductName>
                                    <b>Product:</b> Football Boots Men Sneakers
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 1908
                                </ProductId>
                                <ProductColor color="black" />
                                <ProductSize>
                                    <b>Size:</b> 39
                                </ProductSize>
                            </Details>

                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>

                            <ProductPrice>$ 29</ProductPrice>
                        </PriceDetail>

                    </Product>
                </Info>


                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>


                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 59</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 4</SummaryItemPrice>
                    </SummaryItem>                   
                     <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -4</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 59</SummaryItemPrice>
                    </SummaryItem>

                    <Button>CHECKOUT NOW</Button>
                </Summary>


            </Bottom>
        </Wrapper>

        <Footer/>
    </Container>
  )
}

export default Cart
