import React, {useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCourses,
} from "../../Redux/features/courses/coursesAction";
import {
  OrderDisplayWrapper,
  CheckoutTitle,
  Container,
  ProductTitle,
  MainSection,
  ImageSide,
  ContentSide,
  ImageWrapper,
  Image,
  CardToolOne,
  CardToolSecond,
  CardTools,
  OrderPrice,
  Price,
  PriceTitle,
  TotlePrice,
  OverallPrice,
  OrderAmountAndPriceWrapper,
  SelectOption,
  Option,
  SelectedDiscount,
  AllOrderCharacters,
  Characters,
  TitleCharacter,
  ShowAll,
  ProductCart,
  Wrapper,
} from "./styles";
import { ReactComponent as ArrowRight } from "../../Assets/assets/main/Arrow - Right.svg";
import { ReactComponent as CardTool01 } from "../../Assets/assets/main/Акция-trade in.svg";
import { ReactComponent as CardTool02 } from "../../Assets/assets/main/Акция-IMEI.svg";
import { ReactComponent as CardTool03 } from "../../Assets/assets/main/icon-bundlle.svg";
import { ReactComponent as CardTool04 } from "../../Assets/assets/main/aksiya.svg";
import { ReactComponent as CartSvg } from "../../Assets/assets/main/buy.svg";
import OrderDisplayAction from "../OrdersDisplayActions";

const OrderDisplay = () => {
  const { data, loading, error } = useSelector((state) => state.course);
  const { id } = useParams();
  const dispatch = useDispatch()

  console.log(id)
  // useEffect(() => {
  //   dispatch(getAllCourses());

  // }, []);
 
  return (
    <OrderDisplayWrapper>
      <CheckoutTitle>
        <div className="starter">
          Заявки <ArrowRight /> <div>Оформитъ заказ</div>
        </div>{" "}
        <ArrowRight /> <div>
          {data[id - 3]?.name} 
          </div>
      </CheckoutTitle>
      <Wrapper>
        <ProductTitle>
          {data[id - 3]?.category}
        </ProductTitle>
        <ProductCart>
          <CartSvg />
        </ProductCart>
      </Wrapper>
      <Container>
        <MainSection>
          <ImageSide>
            <CardTools>
              <CardToolOne>
                <CardTool01 />
              </CardToolOne>
              <CardToolSecond>
                <CardTool02 />
              </CardToolSecond>
              <CardToolSecond>
                <CardTool03 />
              </CardToolSecond>
              <CardToolSecond>
                <CardTool04 />
              </CardToolSecond>
            </CardTools>
            <ImageWrapper>
              <Image src={data[id - 3]?.image} />
            </ImageWrapper>
          </ImageSide>
          <ContentSide>
            <OrderPrice>
              <PriceTitle>Цена телефона</PriceTitle>
              <Price>
                {data[id - 3]?.price} сум
              </Price>
            </OrderPrice>
            <OverallPrice>
              <TotlePrice>
                <PriceTitle>Обшая Цена (с нацекой)</PriceTitle>
                <Price>
                  {data[id - 3]?.price} сум
                  </Price>
              </TotlePrice>
              <OrderAmountAndPriceWrapper>
                <div className="one">
                  {data[id - 3]?.price} сум
                  </div>
                <div className="second">X3</div>
              </OrderAmountAndPriceWrapper>
            </OverallPrice>
            <SelectOption>
              <Option>3 мес</Option>
              <Option>6 мес</Option>
              <Option>12 мес</Option>
              <Option>24 мес</Option>
            </SelectOption>
            <SelectedDiscount>
              Наценка: <span> 5%</span>
            </SelectedDiscount>
            <AllOrderCharacters>
              <TitleCharacter>Обшие харатеристики</TitleCharacter>
              <Characters>Тип:моноблок (классический)</Characters>
              <Characters>Стандарт:моноблок 2G,3G,4G,(LTE)5G</Characters>
              <Characters>Оператционная Система:IOS 14</Characters>
            </AllOrderCharacters>
            <ShowAll>Показат все</ShowAll>
          </ContentSide>
        </MainSection>
        <OrderDisplayAction />
      </Container>
    </OrderDisplayWrapper>
  );
};

export default OrderDisplay;
