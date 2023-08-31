// src/components/Sidebar.js

import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Dashboard, MonetizationOn, EmojiEvents, Schedule, CreditCard, Settings, Help, Feedback, Gavel, Lock, ExitToApp } from '@mui/icons-material';

const MainMenu = [
  { label: 'Dashboard', icon: <Dashboard />, link: 'Dashboard' },
  { label: 'Budget & Expenses', icon: <MonetizationOn />, link: 'Budget' },
  { label: 'Savings Goals', icon: <EmojiEvents />, link: 'SavingsGoals' },
  { label: 'Bill Reminders', icon: <Schedule />, link: 'BillReminders' },
  { label: 'Debt Management', icon: <CreditCard />, link: 'DebtManagement' },
  { label: 'Customization', icon: <Settings />, link: 'Customization' },
];

const SecondaryMenu = [
  { label: 'Help & Support', icon: <Help />, link: 'HelpSupport' },
  { label: 'Feedback', icon: <Feedback />, link: 'Feedback' },
  { label: 'Terms & Conditions', icon: <Gavel />, link: 'TermsAndConditions' },
  { label: 'Privacy Policy', icon: <Lock />, link: 'PrivacyPolicy' },
  { label: 'Logout', icon: <ExitToApp />, link: 'Logout' },
];

const Sidebar = ({ onMenuItemClick }) => {
    return (
    <Drawer variant="permanent" anchor="left">
      <div style={{ marginTop: "64" }}> {/* Add margin to push sidebar below the header */}
      <List>
          {MainMenu.map((item, index) => (
            <ListItem button key={index} onClick={() => onMenuItemClick(item.label)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {SecondaryMenu.map((item, index) => (
            <ListItem button key={index} onClick={() => onMenuItemClick(item.label)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>

  );
};

export default Sidebar;
