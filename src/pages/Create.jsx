import React from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Search, Sort, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Add, Toolbar, NormalEdit} from '@syncfusion/ej2-react-grids';
import { createGrid, createData } from '../data/dummy';
import { Header } from '../components';


const Create = () => {
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Create'/>

      <GridComponent
        dataSource={createData} editSettings={editOptions}

        allowPaging
        allowSorting
        toolbar={['Search','Add', 'Edit', 'Delete','Update' ]}
        width='auto'  
       
      
      
      >
        <ColumnsDirective>
          {createGrid.map((item, index)=>(
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Search, Sort, Filter, Page, ExcelExport, Edit, PdfExport, Toolbar]} />
        

      </GridComponent>
    </div>
  )
}

export default Create