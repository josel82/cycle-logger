import React from 'react';

import EntryModal from '../components/EntryModal';
import DashboardTable from './DashboardTable';
import Sidebar from './Sidebar';


const DashboardPage = () => (
  <div className="dashboard-page">
    <Sidebar />
    <div className="page-content">
      <DashboardTable />
    </div>
    <EntryModal 
      showModal={false} 
      closeModal={false}
    />
 </div>
);
  
export default DashboardPage;


