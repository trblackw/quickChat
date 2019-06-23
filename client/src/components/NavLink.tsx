import React from 'react';
import { Link } from '@reach/router';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {
   to: string;
}

// this component could probably be made a lot more flexible in the future
const Navlink: React.FC<Props> = (props): JSX.Element => (
   <Link
      {...props}
      getProps={({ isCurrent }) => ({
         style: {
            fontWeight: isCurrent ? 1000 : 'lighter',
            borderBottom: isCurrent ? '3px solid hsl(191, 21%, 50%)' : 'none',
            paddingBottom: isCurrent ? '14px' : 'none',
            fontColor: isCurrent ? 'red' : 'blue'
         },
      })}
   />
);

export default Navlink;
