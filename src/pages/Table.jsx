import { useState, useEffect, useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react'
import Wrapper from '../components/UI/Wrapper'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const Table = () => {
  const [rowData, setRowData] = useState([])

  const [columnDefs, setColumnDefs] = useState([{}])

  const fetchData = async () => {
    const response = await fetch(
      'https://www.ag-grid.com/example-assets/row-data.json',
      {
        method: 'GET',
      },
    )
    const data = await response.json()
    setRowData(data)
    let firstInfo = data[0]
    let columnDefsHeading = []
    for (let key in firstInfo) {
      if (key === 'price') {
        columnDefsHeading.push({
          field: key,
          filter: 'agNumberColumnFilter',
          // filterParams: {
          //   caseSensitive: true,
          //   defaultOption: 'startsWith',
          // },
        })
      } else {
        columnDefsHeading.push({
          field: key,
          filter: 'agTextColumnFilter',
          // filterParams: {
          //   caseSensitive: true,
          //   defaultOption: 'startsWith',
          // },
        })
      }
    }

    setColumnDefs(columnDefsHeading)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      maxWidth: 500,
    }
  }, [])

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 600, width: '80%', margin: '5% auto' }}
    >
      <AgGridReact
        pagination={true}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  )
}

export default Table
