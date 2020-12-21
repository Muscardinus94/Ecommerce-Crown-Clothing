import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }

  .test-warning {
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
  }

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  .header-block {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
  }

  @media (max-width: 768px) {
    padding: 10px 10px 10px 0;
  }
`;
