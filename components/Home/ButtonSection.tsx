import React, { FC, useCallback, useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface IProps {
  hello?: boolean;
}

const ButtonSection: FC<IProps> = ({ hello }) => {
  const [test, setTest] = useState(false);
  const onClickTest = useCallback(() => setTest(!test), [test]);
  return (
    <>
      <Text fontSize="lg">컴포넌트의 경우 state 존재{test && !hello ? '유무로' : ''}</Text>
      <Button colorScheme="primary" onClick={onClickTest}>
        Test
      </Button>
    </>
  );
};

export default ButtonSection;
