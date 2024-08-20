import { Box, TableCell, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const ROW_HEIGHT = 60

export const ScrollableBox = styled(Box)`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
`

export const StickyColumnCell = styled(TableCell)`
  position: sticky;
  left: 0;
  background-color: #f5f5f5;
  z-index: 2;
  width: 200px;
  height: ${ROW_HEIGHT}px;
  display: flex;
  align-items: center;
  padding: 16px;
  border-right: 1px solid #ddd;
`

export const StickyHeaderCell = styled(TableCell)`
  position: sticky;
  top: 0;
  background-color: #f5f5f5;
  z-index: 3;
  width: 60px;
  height: ${ROW_HEIGHT}px;
  border-bottom: 1px solid #ddd;
`

export const TimelineCell = styled(TableCell)`
  padding: 0;
  border: none;
  height: ${ROW_HEIGHT}px;
  position: relative;
`

export const LineContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props: { color: string }) => props.color};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

export const HeaderText = styled(Typography)`
  color: rgba(0, 0, 0, 0.54);
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  line-height: ${ROW_HEIGHT}px;
`
