import React from "react";
import {
  OrderDisplayActionWrapper,
  Title,
  Container,
  Header,
  Button,
  Text,
  BottomText,
  SubmitButton,
} from "./styles";
import { ReactComponent as CardTool01 } from "../../Assets/assets/main/Акция-trade in.svg";
import { ReactComponent as CardTool02 } from "../../Assets/assets/main/Акция-IMEI.svg";
import { ReactComponent as CardTool03 } from "../../Assets/assets/main/icon-bundlle.svg";
import { ReactComponent as CardTool04 } from "../../Assets/assets/main/aksiya.svg";
import { ReactComponent as Tick } from "../../Assets/assets/main/tick.svg";

const OrderDisplayAction = () => {
  return (
    <OrderDisplayActionWrapper>
      <Title>Акции</Title>
      <Container>
        <Header>
          <CardTool01 />
          <Text>Обменяй свой старый айфон и получи скидку на новый</Text>
          <Button></Button>
        </Header>
        <BottomText> - 400 000 сум</BottomText>
      </Container>
      <Container>
        <Header>
          <CardTool03 />
          <Text>Apple EarPods</Text>
          <Button>
            <Tick />
          </Button>
        </Header>
        <BottomText> Apple EarPods</BottomText>
      </Container>
      <Container>
        <Header>
          <CardTool04 />
          <Text>Скидка 20% на смартфоны</Text>
          <Button>
            <Tick />
          </Button>
        </Header>
        <BottomText> - 10 000 сум</BottomText>
      </Container>
      <Container>
        <Header>
          <CardTool02 />
          <Text>
            Скидка на айфоны <br /> IMEI 012345678901234
          </Text>
          <Button>
            <Tick />
          </Button>
        </Header>
        <BottomText> - 10 000 сум</BottomText>
      </Container>
      <br/>
      <SubmitButton>Добавить в корзину</SubmitButton>
        <br/>
        <br/>
        <br/>

    </OrderDisplayActionWrapper>
  );
};

export default OrderDisplayAction;
