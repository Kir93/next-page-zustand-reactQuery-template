import React, { FC, memo, useCallback, useState } from 'react';
import equal from 'fast-deep-equal';
import { Button } from 'antd';
import { HS } from '.';

interface IProps {
  hello?: boolean;
}

const ButtonSection: FC<IProps> = ({ hello }) => {
  const [test, setTest] = useState(false);
  const onClickTest = useCallback(() => setTest(!test), [test]);
  return (
    <>
      <HS.Text>컴포넌트의 경우 state 존재{test && !hello ? '유무로' : ''}</HS.Text>
      <Button onClick={onClickTest}>
        <HS.Text>Test</HS.Text>
      </Button>
    </>
  );
};

export default memo(ButtonSection, equal);
