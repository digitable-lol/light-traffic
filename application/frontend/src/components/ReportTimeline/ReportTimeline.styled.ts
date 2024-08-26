import { Box, TableCell, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const ROW_HEIGHT = 60
const HEADER_ROW_HEIGHT = ROW_HEIGHT
const COLUMN_WIDTH = 100
const HORIZONTAL_PADDING = 8
const LINE_HEIGHT = 50

export const ScrollableBox = styled(Box)`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
`

export const StickyColumnCell = styled(TableCell)`
  position: sticky;
  left: 0;
  z-index: 2;
  width: ${COLUMN_WIDTH}px;
  height: ${ROW_HEIGHT}px;
  display: flex;
  align-items: center;
  padding: 0 ${HORIZONTAL_PADDING}px;
  border-right: 1px solid #ddd;
  vertical-align: middle;
  box-sizing: border-box;
`

export const StickyHeaderCell = styled(TableCell)`
  position: sticky;
  top: 0;
  z-index: 3;
  width: ${COLUMN_WIDTH}px;
  height: ${HEADER_ROW_HEIGHT}px;
  border-bottom: 1px solid #ddd;
  padding: 0 ${HORIZONTAL_PADDING}px;
  vertical-align: middle;
  box-sizing: border-box;
`

export const TimelineCell = styled(TableCell)`
  padding: 0 ${HORIZONTAL_PADDING}px;
  border: none;
  height: ${ROW_HEIGHT}px;
  position: relative;
  vertical-align: middle;
  width: ${COLUMN_WIDTH}px;
  box-sizing: border-box;
`

export const LineContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: ${LINE_HEIGHT}px;
  transform: translateY(-50%);
  background-color: ${(props: { color: string }) => props.color};
  border-radius: 0;
  box-shadow: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  box-sizing: border-box;
`

export const HeaderText = styled(Typography)`
  color: rgba(0, 0, 0, 0.54);
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  line-height: ${HEADER_ROW_HEIGHT}px;
  vertical-align: middle;
  margin: 0;
`

export const DateCell = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${HEADER_ROW_HEIGHT}px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

export const DayOfWeek = styled(Typography)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  line-height: 1;
  margin: 0;
`

export const DateNumber = styled(Typography)`
  font-size: 16px; 
  font-weight: bold;
  line-height: 1;
  margin: 0; ы
`
