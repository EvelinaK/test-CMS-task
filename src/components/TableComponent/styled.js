import styled from 'styled-components';
import {
  Pagination,
  styled as style,
  TableRow,
  Paper,
  TableCell,
  TextField,
  Box,
} from '@mui/material';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 32px;
`;

export const StyledTableRow = style(TableRow)`
  &:nth-of-type(odd) {
    background-color: transparent;
  }
  &:last-child td,
  &:last-child th {
    border: 0;
  }
  :hover {
    background-color: #60677a;
  }
`;

export const StyledPagination = style(Pagination)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  color: white;
`;
export const StyledPaper = style(Paper)`
  background-color: transparent;
`;

export const StyledTableCell = style(TableCell)`
  color: white;
  border-bottom: none;
`;
export const StyledContainer = style(TableCell)`
  color: white;
  border-bottom: none;
`;
export const CssTextField = style(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

export const BoxTableContainer = style(Box)`
  overflow-x: auto;
  overflow-y: scroll;
  height: 200px;
  padding: 0 1rem;
`;

export const ModelContainer = styled.div`
  max-width: 150px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CardImage = styled.img`
  display: flex;
`;

export const ModelName = styled.span`
  display: flex;
  color: white;
`;
