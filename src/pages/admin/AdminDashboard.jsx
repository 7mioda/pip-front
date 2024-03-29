import React from 'react';
import AdminLayout from './AdminLayout';
import ChartCard from '../../components/ChartCard/ChartCard';
import SimpleLineChart from '../../components/SimpleLineChart/SimpleLineChart';

const AdminDashboard = () => (
  <AdminLayout>
    <div style={{ width: '100%' }}>
      <ChartCard>
        <SimpleLineChart />
      </ChartCard>
    </div>
  </AdminLayout>
);

export default AdminDashboard;
