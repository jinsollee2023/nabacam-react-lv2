import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
}
`;

interface ToggleBtnProps {
  borderColor?: string;
}

const S = {
  Header: styled.div`
    height: 50px;
    border: solid 1px grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  HeaderSpan: styled.span`
    margin: 0 15px 0 15px;
  `,
  PaintDiv: styled.div`
    margin: 20px;
  `,
  PaintDivH1: styled.h1`
    font-size: 25px;
    font-weight: 800;
    margin: 20px 0 20px 0;
  `,

  Form: styled.form`
    background-color: rgb(240, 240, 240);
    height: 100px;
    border-radius: 10px;
    padding: 0 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  FormInputDiv: styled.div`
    min-width: 800px;
  `,
  FormInput: styled.input`
    border: none;
    border-radius: 10px;
    height: 35px;
    margin: 0 20px 0 20px;
    width: 250px;
  `,
  FormBtn: styled.button`
    border: none;
    border-radius: 10px;
    height: 35px;
    margin-right: 20px;
    width: 150px;
    min-width: 80px;
    color: white;
    background-color: rgb(178, 178, 178);
    cursor: pointer;
  `,

  TodoCard: styled.div`
    border: solid 5px rgb(178, 178, 178);
    border-radius: 15px;

    width: 300px;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 20px 20px 0;
  `,
  TodoH2: styled.div`
    font-size: 25px;
    font-weight: 800;
    margin: 10px 0 25px 0;
  `,
  BtnContainer: styled.div`
    margin-top: 20px;
  `,

  ToggleBtn: styled.button<ToggleBtnProps>`
    border: 2px solid ${(props) => props.borderColor};
    background-color: transparent;
    width: 80px;
    height: 40px;
    border-radius: 10px;
    margin: 5px;
    cursor: pointer;
  `,

  DetailContainer: styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  DetailCard: styled.div`
    width: 800px;
    height: 500px;
    border: 1px grey solid;
    padding: 50px;
  `,

  DetailH1: styled.h1`
    font-size: 40px;
    font-weight: 800;
    margin: 10px 0 25px 0;
  `,
  DetailP: styled.p`
    margin-bottom: 30px;
  `,

  DetailH2: styled.h2`
    font-size: 25px;
    font-weight: 800;
    margin: 10px 0 25px 0;
  `,
  DetailBtn: styled.button`
    border: none;
    border-radius: 10px;
    height: 35px;
    margin: 300px 0 0 350px;
    width: 150px;
    min-width: 80px;
    color: white;
    background-color: rgb(178, 178, 178);
    cursor: pointer;
  `,
};

export default S;
