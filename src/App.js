import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import {Navbar, Footer, Sidebar} from './components';
import {Employees, Scheduler, Create, List, Generate, Approve, History, Shifts, Finance, Timesheet, AuditLogs, SystemAccess, 
  Clients, ThirdParty, User, System} from './pages';

import './App.css'
// import Scheduler from './pages/Scheduler';
// import List from './pages/List';
// import Generate from './pages/Generate';
// import Approve from './pages/Approve';
// import History from './pages/History';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const {activeMenu}=useStateContext();

  return (
    <div>
        <BrowserRouter>
         <div className='flex relative dark:bg-main-dark-bg'>

            {activeMenu ?(
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar/>
              </div>
            ) :(
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar/>
              </div>
            )}
            <div className={
              activeMenu ?
              'dark:bg-main-bg bg-main-bg min-h-screen w-full md:ml-72'
              :' dark:bg-main-bg bg-main-bg w-full min-h-screen flex-2'
            }>
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full' >
                <Navbar/>

              </div>
            

            <div>
              <Routes>

                {/* Roster */}
                <Route path="/"element={<Scheduler />} />
                <Route path="/scheduler"element={<Scheduler />} />
                <Route path='/create' element={<Create />} />

                {/* Invoice */}
                <Route path="/list"element={<List />} />
                <Route path='/generate' element={<Generate />} />

                {/* Timesheets */}
                <Route path="/approve"element={<Approve />} />
                <Route path='/history' element={<History />} />

                {/* Reports */}
                <Route path="/shifts"element={<Shifts />} />
                <Route path='/finance' element={<Finance />} />
                <Route path='/timesheet' element={<Timesheet />} />
                <Route path='/audit-logs' element={<AuditLogs />} />
                <Route path='/system-access' element={<SystemAccess />} />

                {/* Contacts */}
                <Route path="/clients"element={<Clients />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/third-party' element={<ThirdParty />} />
                
                {/* Settings */}
                <Route path="/user"element={<User />} />
                <Route path='/system' element={<System />} />


              </Routes>
            </div>
          </div>
         </div>
        
        </BrowserRouter>
    </div>
  )
}

export default App
