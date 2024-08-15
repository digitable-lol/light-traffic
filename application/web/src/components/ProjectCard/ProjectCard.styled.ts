import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 80px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 2px 3px 0px rgba(0, 0, 0, 0.14),
    0px 3px 5px -2px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const ProjectName = styled.span`
  flex: 1;
  margin-left: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
`

export const ArrowIcon = styled.div`
  color: #000000;
  font-size: 24px;
`
