import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Container, Content, Result } from './styles';

import Button from '../../components/button';
import CardInfo from '../../components/cardInfo';
import CodeEditor from '../../components/codeEditor';
import Header from '../../components/header';
import Subtitle from '../../components/subtitle';
import Message from '../../text-steps.json';
import BoxInputTw from '../../components/InputTw';

const Step4 = props => {
  const [disabled, setDisabled] = useState(true);
  const [editorValue, setEditorValue] = useState('');

  function handleClick() {
    props.history.push('/step05');
  }

  return (
    <>
      <Header {...props} />
      <Container>
        <CardInfo width="50%" background="#f9f9f9" text={Message.step04} />

        <Content>
          <Subtitle
            text="Copie o codigo ao lado para você ir para o próximo nível."
            margin="0 0 30px"
            align="left;"
          />
          <div>
            <CodeEditor
              mode="html"
              compareValue="<h1>oie</h1>"
              handleDisabled={() => setDisabled(false)}
              handleEnabled={() => setDisabled(true)}
              value={editorValue}
              onChange={setEditorValue}
            />
            <CodeEditor mode="html" readOnly value="<h1>oie</h1>" />
          </div>

          <Subtitle
            text="Resultado do código abaixo:"
            margin="30px 0 30px"
            align="left;"
          />

          <Result>
            <BoxInputTw />
          </Result>

          <Button onClick={handleClick} text="Avançar <3" disabled={disabled} />
        </Content>
      </Container>
    </>
  );
};

Step4.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Step4;