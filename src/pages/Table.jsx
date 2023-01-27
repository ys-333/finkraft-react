import { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import Wrapper from '../components/UI/Wrapper'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const Table = () => {
  const [rowData, setRowData] = useState([])

  const [columnDefs, setColumnDefs] = useState([])

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
      columnDefsHeading.push({
        field: key,
        filter: 'agTextColumnFilter',
        filterParams: {
          textMatcher: ({ filter, value, filterText }) => {
            const filterTextLowerCase = filterText.toLowerCase()
            const valueLowerCase = value.toString().toLowerCase()
            switch (filter) {
              case 'contains':
                return valueLowerCase.indexOf(filterTextLowerCase) >= 0
              case 'notContains':
                return valueLowerCase.indexOf(filterTextLowerCase) === -1
              case 'equals':
                return valueLowerCase === filterTextLowerCase
              case 'notEqual':
                return valueLowerCase != filterTextLowerCase
              case 'startsWith':
                return valueLowerCase.indexOf(filterTextLowerCase) === 0
              case 'endsWith':
                var index = valueLowerCase.lastIndexOf(filterTextLowerCase)
                return (
                  index >= 0 &&
                  index === valueLowerCase.length - filterTextLowerCase.length
                )
              default:
                // should never happen
                console.warn('invalid filter type ' + filter)
                return false
            }
          },
        },
      })
    }

    setColumnDefs(columnDefsHeading)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        pagination={true}
        rowData={rowData}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  )
}

export default Table
