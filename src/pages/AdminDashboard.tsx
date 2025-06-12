
import React, { useState } from 'react';
import { BarChart3, Users, CreditCard, Activity, DollarSign, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Header from '@/components/Layout/Header';

const AdminDashboard = () => {
  // Mock data
  const stats = [
    { title: 'Total Revenue', value: '$12,345', icon: DollarSign, change: '+12%' },
    { title: 'Active Users', value: '1,234', icon: Users, change: '+5%' },
    { title: 'Top-ups Today', value: '89', icon: Smartphone, change: '+23%' },
    { title: 'Success Rate', value: '98.5%', icon: Activity, change: '+1.2%' },
  ];

  const recentTopUps = [
    { id: '001', phone: '+1234567890', amount: '$25.00', status: 'Completed', time: '2 min ago' },
    { id: '002', phone: '+1987654321', amount: '$10.00', status: 'Completed', time: '5 min ago' },
    { id: '003', phone: '+1122334455', amount: '$50.00', status: 'Processing', time: '8 min ago' },
    { id: '004', phone: '+1555666777', amount: '$15.00', status: 'Completed', time: '12 min ago' },
    { id: '005', phone: '+1999888777', amount: '$30.00', status: 'Failed', time: '15 min ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-500';
      case 'Processing': return 'text-yellow-500';
      case 'Failed': return 'text-red-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-6 w-6 mr-2 text-primary" />
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>
          <p className="text-muted-foreground">
            Monitor your platform's performance and user activity
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-white/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-500">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Recent Top-ups</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead>Phone</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTopUps.map((topup) => (
                    <TableRow key={topup.id} className="border-white/10">
                      <TableCell className="font-medium">{topup.phone}</TableCell>
                      <TableCell>{topup.amount}</TableCell>
                      <TableCell className={getStatusColor(topup.status)}>
                        {topup.status}
                      </TableCell>
                      <TableCell className="text-muted-foreground">{topup.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>API Status</span>
                <span className="flex items-center text-green-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Payment Gateway</span>
                <span className="flex items-center text-green-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Connected
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Database</span>
                <span className="flex items-center text-green-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Healthy
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>SMS Service</span>
                <span className="flex items-center text-yellow-500">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  Warning
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demo Notice */}
        <Card className="glass-card border-yellow-500/20 mt-8">
          <CardContent className="pt-6">
            <div className="text-center">
              <Activity className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Demo Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                This is a read-only demo dashboard with mock data. 
                Real-time data integration will be available after backend setup.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
