import React from 'react';
import { Route } from 'react-router-dom';

import DashboardTable from './DashboardTable';
import AddEntry from './AddEntry';
import Sidebar from './Sidebar';
import EditEntry from './EditEntry';


const DashboardPage = () => (
  <div className="dashboard-page">
    <Sidebar />
    <div className="page-content">
      <div className="page-content__box">
          <Route path="/dashboard" component={DashboardTable} exact />
          <Route path="/dashboard/add" component={AddEntry} />
          <Route path="/dashboard/edit/:id" component={EditEntry} />
      </div>
    </div>
 </div>
);
  
export default DashboardPage;


