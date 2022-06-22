import * as React from 'react';
import { PortletWrapper } from "./styles";
import { Description } from "./styles";

interface IPortletItem {
  title: string;
  color: string;
}

const PortletItem: React.FC<IPortletItem> = ({
  color = "white",
  title="NÃO INFORMADO!!!"
}) => {

  return (
    <PortletWrapper>
      <Description color={color}>
        {title}
      </Description>
    </PortletWrapper>
  );
};

export default PortletItem;
