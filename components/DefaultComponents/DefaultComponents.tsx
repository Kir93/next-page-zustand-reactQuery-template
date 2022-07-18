import React, { FC, memo, useCallback, useState } from 'react';
import equal from 'fast-deep-equal';
import { Button } from 'antd';

import D from './DefaultComponents.styles';

interface IProps {
  hello?: boolean;
}

const DefaultComponents: FC<IProps> = ({ hello }) => {
  const [test, setTest] = useState(false);
  const onClickTest = useCallback(() => setTest(!test), [test]);
  return (
    <>
      <Button onClick={onClickTest}>
        <D.Text>컴포넌트의 경우 state 존재{test && !hello ? '유무로' : ''}</D.Text>
      </Button>
    </>
  );
};

export default memo(DefaultComponents, equal);
