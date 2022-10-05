import { useState } from 'react';
import DataRow from './DataRow';

export type DataTableProps = {
  isLoading: boolean,
  data: any[]
}
const DataTable = (({ props }: { props: DataTableProps }) => {

  return (
    <div>
      {props.data?.map((row, index) => {
        return (
          <DataRow
            key={index}
            props={{
              isLoading: props.isLoading,
              isCollapsed: true,
              rowData: row,
              index: index
            }}
          />
        )
      })}
    </div>
  )
});

export default DataTable;