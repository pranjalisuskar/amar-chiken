import React from 'react';
// import { Typography, Grid, Paper } from '@mui/material';
import { Grid, Paper, Typography } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
} from '@mui/icons-material';


const Content = () => {
    return (
        <>
       
          <div>
            <Typography variant="h4" gutterBottom>
              Dashboard
            </Typography>
            <Grid container spacing={3}>
      {/* Card 1 */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <DashboardIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Dashboard</Typography>
            <Typography variant="body2">View your stats and metrics.</Typography>
          </div>
        </Paper>
      </Grid>
      {/* Card 2 */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <AccountCircleIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Profile</Typography>
            <Typography variant="body2">Manage your account settings.</Typography>
          </div>
        </Paper>
      </Grid>
      {/* Card 3 */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <SettingsIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Settings</Typography>
            <Typography variant="body2">Customize your preferences.</Typography>
          </div>
        </Paper>
      </Grid>
      {/* Card 4 */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <InfoIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Info</Typography>
            <Typography variant="body2">Find helpful resources and FAQs.</Typography>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <AccountCircleIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Profile</Typography>
            <Typography variant="body2">Manage your account settings.</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <AccountCircleIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Profile</Typography>
            <Typography variant="body2">Manage your account settings.</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <AccountCircleIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Profile</Typography>
            <Typography variant="body2">Manage your account settings.</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <AccountCircleIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Profile</Typography>
            <Typography variant="body2">Manage your account settings.</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <AccountCircleIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Profile</Typography>
            <Typography variant="body2">Manage your account settings.</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <AccountCircleIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Profile</Typography>
            <Typography variant="body2">Manage your account settings.</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <AccountCircleIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Profile</Typography>
            <Typography variant="body2">Manage your account settings.</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 3, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <AccountCircleIcon sx={{ fontSize: 40, color: '#1976d2', marginRight: 2 }} />
          <div>
            <Typography variant="h6">Profile</Typography>
            <Typography variant="body2">Manage your account settings.</Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
          </div>
         
        </>
      );
    }      

export default Content;
