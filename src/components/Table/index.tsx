import { usePagination, useTable } from "react-table"
import { Button } from "../Button"
import { Loader } from "../Loader"
import { LoaderWrapper } from "../Loader/style"


type props = {
    columns:any
    data:any
    isLoading:boolean
    buttonText:string
    onClick: () => void
}


export const Table:React.FC<props> = ({columns, data, isLoading, buttonText, onClick}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <>
      <table className="body_table" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
    {!isLoading&&
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody> 
    }
    </table>
    {isLoading&&<div className="loader"><Loader/></div>}
    {!isLoading&&
      !data.length &&
        <div className="no-data">
          <p>No Feedback added</p>
          <Button text={buttonText} onClick={onClick}/>
        </div>
    }
    </>
  )
}
