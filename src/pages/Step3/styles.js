import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  width: 70%;
  background-color: ${props => props.background};
  padding: 50px;

  color: #211f1f;
  text-align: left;
  line-height: 1.4;
  font-size: 15px;
  flex-direction: column;
  height: 100%;
  height: 100vh;
  overflow: auto;
  padding-bottom: 30px;

  > div {
    display: flex;
    flex-direction: row;
  }
`;

export const Result = styled.div`
  width: 100%;
  box-shadow: 0px 1px 3px 0px #c1c1c1;
  padding: 30px;
  margin: 30px 0;
`;

export const TextAreaTwitter = styled.textarea`
  width: 100%;
`;
