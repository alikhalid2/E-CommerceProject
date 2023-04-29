import { Email, Facebook, Instagram, PhoneAndroid, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
display: flex ;
background-color: #800000;
color:white;
${mobile({ flexDirection : "column" })}

`;
//Component of Left Side
const Left      = styled.div`
    flex    : 1;
    flex-direction : column;
    padding : 20px;
`;
///1
const Logo      = styled.h1`

`;
///2
const Description= styled.p`
    margin: 20px 0px;
`;
///3
const SocialContainer= styled.div`
display: flex;

`;
///4
const SocialIcon      = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
`;

//Component of CENTER Side
const Center    = styled.div`
    flex   : 1;
    padding: 20px;
    ${mobile ({ display: "none" })}

`;
///1
const Title = styled.h3`
  margin-bottom: 30px;
`;
///2
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
///3
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
//Component of Right Side
const Right     = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ backgroundColor: "#800000",color : "white"})}

`;
///1
const ContactItem = styled.div`
    margin-bottom :20px;
    display: flex;
    align-items: center;
`;
///2
const Payment = styled.img`

`;
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AliBabaExpress.</Logo>
            <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Nihil exercitationem vel quaerat ad. Ut, ratione? Dignissimos eligendi perferendis placeat in atque,
                 error temporibus vitae id, architecto nihil assumenda! Ipsa, possimus.
                 </Description>
            <SocialContainer>

                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>

                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>

            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight:"10px;"}}/>
                    256 AlBahr ST, Tanta ,Egypt
                </ContactItem>               
                 <ContactItem><PhoneAndroid style={{marginRight:"10px;"}}/>
                    +20 22 222 2222
                </ContactItem>
                <ContactItem><Email style={{marginRight:"10px;"}}/>
                    contact@AliBabaExpress.lumo
                </ContactItem>
                <Payment src=""/>
        </Right>
    </Container>
  )
}

export default Footer
