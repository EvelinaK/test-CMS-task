import { Box, Typography, styled } from '@mui/material';
import React, { useState } from 'react';

import TableComponent from '../components/TableComponent/index';
import DashboardCard from '../components/Card/index';

import { ModelContainer, ModelName } from '../components/TableComponent/styled';

const DummyTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onClickRow = (cell, rowy) => {};
  const TypographyContainer = styled(Typography)`
    padding: 0 12px 12px 0px;
    font-size: 18px;
    font-weight: 600;
    color: rgb(255, 255, 255);
  `;

  const Header = (
    <Box display="flex" alignItems="center">
      <TypographyContainer variant="h4" alignItems="center">
        General Table
      </TypographyContainer>
    </Box>
  );

  const columns = [
    {
      accessorKey: 'model',
      header: 'Card model',
      cell: ({ row }) => {
        return (
          <ModelContainer>
            <ModelName>
              {row.original?.model && row.original.model.name}
            </ModelName>
          </ModelContainer>
        );
      },
    },
    {
      accessorKey: 'card_name',
      header: 'card_name',
    },
    {
      accessorKey: 'card_number',
      header: 'card_number',
    },
    {
      accessorKey: 'date',
      header: 'date',
    },
    {
      accessorKey: 'limited',
      header: 'limited',
    },
    {
      accessorKey: 'operations',
      header: 'operations',
    },
    {
      accessorKey: 'status',
      header: 'status',
    },
    {
      accessorKey: 'price',
      header: 'price',
    },
    {
      accessorKey: 'rating',
      header: 'rating',
    },
  ];

  const mockTableData = [
    {
      card_name: 'Vmax 330',
      card_number: '#5',
      date: '24-12-2018',
      limited: 4,
      model: { image: null, name: 'Trading Card Game' },
      operations: 14,
      price: '$840',
      rating: 98,
      status: '9 out of 10',
      type: 'Amet minim',
    },
    {
      card_name: 'Vmax 330',
      card_number: '#5',
      date: '24-12-2018',
      limited: 4,
      model: { image: null, name: 'Trading Card Game' },
      operations: 14,
      price: '$840',
      rating: 98,
      status: '9 out of 10',
      type: 'Amet minim',
    },
    {
      card_name: 'Vmax 330',
      card_number: '#5',
      date: '24-12-2018',
      limited: 4,
      model: { image: null, name: 'Trading Card Game' },
      operations: 14,
      price: '$840',
      rating: 98,
      status: '9 out of 10',
      type: 'Amet minim',
    },
    {
      card_name: 'Vmax 330',
      card_number: '#5',
      date: '24-12-2018',
      limited: 4,
      model: { image: null, name: 'Trading Card Game' },
      operations: 14,
      price: '$840',
      rating: 98,
      status: '9 out of 10',
      type: 'Amet minim',
    },
  ];

  return (
    <>
      <DashboardCard height={400}>
        <TableComponent
          data={mockTableData}
          columns={columns}
          isFetching={!mockTableData.length}
          headerComponent={Header}
          onClickRow={onClickRow}
          pageCount={currentPage}
          page={setCurrentPage}
        />
      </DashboardCard>
    </>
  );
};

export default DummyTable;
