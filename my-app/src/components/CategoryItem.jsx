import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
flex:1 ;
margin :3px ;
height :70vh;
position: relative;
`;
// make img small
const Image = styled.img`
width : 100% ;
height:100%;
opacity: 0.8;
object-fit : cover;
${mobile({ height: "30vh" })}

`;
const Info = styled.div`
position : absolute;
top :0;
left:0;
width : 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
const Title = styled.h1`
padding: 5px;
border-radius: 5px;
color : #800000 ;
margin-bottom: 20px ; 
background-color: white;

`;
const Button = styled.button`
border : none;
padding: 10px;
background-color: #800000;
color  : white;
cursor :pointer;
font-weight :600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src= {item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
