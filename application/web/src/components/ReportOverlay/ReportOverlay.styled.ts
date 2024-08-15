import styled from "styled-components"

export const Backdrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 1200;
`

export const CreateReportOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 50%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 1300;
  margin-left: 16px;
  margin-right: 16px;
`

export const OverlayContainer = styled.div`
  padding: 16px;
  padding-left: 24px;
  padding-right: 24px;
`

export const OverlayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  background-color: #f5f5f5;
`

export const ColorCircle = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: inline-block;
  margin-right: 8px;
`

export const ColorTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
`
