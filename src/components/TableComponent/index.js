import React, { useState, useMemo, memo } from 'react';
import {
  Box,
  Skeleton,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  StyledTableRow,
  StyledTableCell,
  BoxTableContainer,
  HeaderContainer,
} from './styled';

const TableComponent = ({
  data,
  columns,
  isFetching,
  skeletonCount = 10,
  skeletonHeight = 28,
  headerComponent,

  onClickRow,
}) => {
  const [columnVisibility, setColumnVisibility] = useState({});

  const memoizedData = useMemo(() => data, [data]);
  const memoizedColumns = useMemo(() => columns, [columns]);
  const memoisedHeaderComponent = useMemo(
    () => headerComponent,
    [headerComponent]
  );

  const { getHeaderGroups, getRowModel, getAllColumns } = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
  });

  const skeletons = Array.from({ length: skeletonCount }, (_, i) => i);

  const columnCount = getAllColumns().length;

  const noDataFound =
    !isFetching && (!memoizedData || memoizedData.length === 0);

  return (
    <>
      <Box paddingX="2rem">
        {memoisedHeaderComponent && (
          <HeaderContainer>{memoisedHeaderComponent}</HeaderContainer>
        )}
      </Box>
      <BoxTableContainer>
        <MuiTable>
          {!isFetching && (
            <TableHead>
              {getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <StyledTableCell key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </StyledTableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
          )}
          <TableBody>
            {!isFetching ? (
              getRowModel().rows.map(row => (
                <StyledTableRow key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <StyledTableCell
                      onClick={() => onClickRow?.(cell, row)}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))
            ) : (
              <>
                {skeletons.map(skeleton => (
                  <TableRow key={skeleton}>
                    {Array.from({ length: columnCount }, (_, i) => i).map(
                      elm => (
                        <StyledTableCell key={elm}>
                          <Skeleton height={skeletonHeight} />
                        </StyledTableCell>
                      )
                    )}
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </MuiTable>
      </BoxTableContainer>
      {noDataFound && (
        <Box my={2} textAlign="center">
          No Data Found
        </Box>
      )}
    </>
  );
};

export default memo(TableComponent);
