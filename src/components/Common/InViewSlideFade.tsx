import { SlideFade } from '@chakra-ui/react';
import { InView } from 'react-intersection-observer';

type InViewSlideFadeProps = {
  offsetY?: string;
  offsetX?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const InViewSlideFade: React.FC<InViewSlideFadeProps> = ({
  offsetY = '-50px',
  offsetX,
  children,
  style
}: InViewSlideFadeProps) => {
  return (
    <InView>
      {/* eslint-disable-next-line no-unused-vars */}
      {({ inView, ref, entry }) => (
        <SlideFade
          ref={ref}
          in={inView}
          transition={{ enter: { duration: 1 } }}
          offsetY={offsetY}
          offsetX={offsetX}
          style={style}
        >
          {children}
        </SlideFade>
      )}
    </InView>
  );
};

export default InViewSlideFade;
