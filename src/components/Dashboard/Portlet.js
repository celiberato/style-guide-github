import styled from "styled-components";
import * as React from 'react';


interface IPortlet {
  color: string;
}

interface IDescription {
  title: string;
  color: string;
}

const PortletWrapper = styled.div<IPortlet>`
  color: {color};
`
const Description = styled.div<IDescription>`
  color: {color};interface IPortletItem {
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