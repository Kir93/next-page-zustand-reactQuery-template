import { FC, useCallback, useState } from 'react';

import { Box, Button, Text } from '@chakra-ui/react';

interface IProps {
  hello?: boolean;
}

const ButtonSection: FC<IProps> = ({ hello }) => {
  const [test, setTest] = useState(false);
  const onClickTest = useCallback(() => setTest(!test), [test]);
  return (
    <>
      <Box bgColor="gray.100" p="4" borderRadius="lg">
        <Text fontSize="lg">컴포넌트의 경우 state 존재{test && !hello ? '유무로' : ''}</Text>
        <Button colorPalette={test ? 'primary' : 'secondary'} onClick={onClickTest}>
          Test
        </Button>
      </Box>
    </>
  );
};

export default ButtonSection;
