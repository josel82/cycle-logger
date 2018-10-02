import React from 'react';
import { Route } from 'react-router-dom';

import DashboardTable from './DashboardTable';
import AddEntry from './AddEntry';
import Sidebar from './Sidebar';


const DashboardPage = () => (
  <div className="dashboard-page">
    <Sidebar />
    <div className="page-content">
      <Route path="/dashboard" component={DashboardTable} exact={true} />
      <Route path="/dashboard/add" component={AddEntry} />
    </div>
 </div>
);
  
export default DashboardPage;


