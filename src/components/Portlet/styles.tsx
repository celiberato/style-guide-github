import styled from "styled-components";


interface IPortlet {
  color: string;
}

export const PortletWrapper = styled.div<IPortlet>`
  color: {color};
`


interface IDescription {
  title: string;
  color: string;
}

export const Description = styled.div<IDescription>`
  color: {color};
`