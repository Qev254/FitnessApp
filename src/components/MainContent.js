// fitness/client/src/components/MainContent.js

import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';

// Import content components
import DashboardContent from './pages/Dashboard/Dashboard';
import BudgetContent from './pages/Budget/Budget';
import SavingsGoalsContent from './pages/SavingsGoals/SavingsGoals';
import BillRemindersContent from './pages/BillReminders/BillReminders';
import DebtManagementContent from './pages/DebtManagement/DebtManagement';
import CustomizationContent from './pages/Customization/Customization';
import HelpSupportContent from './pages/HelpSupport/HelpSupport';
import FeedbackContent from './pages/Feedback/Feedback';
import TermsAndConditionsContent from './pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicyContent from './pages/PrivacyPolicy/PrivacyPolicy';
import LogoutContent from './pages/Logout/Logout';

const pageComponents = {
  Dashboard: <DashboardContent />,
  'Budget & Expenses': <BudgetContent />,
  'Savings Goals': <SavingsGoalsContent />,
  'Bill Reminders': <BillRemindersContent />,
  'Debt Management': <DebtManagementContent />,
  Customization: <CustomizationContent />,
  'Help & Support': <HelpSupportContent />,
  Feedback: <FeedbackContent />,
  'Terms & Conditions': <TermsAndConditionsContent />,
  'Privacy Policy': <PrivacyPolicyContent />,
  Logout: <LogoutContent />,
};

const MainContent = ({ pageComponent }) => {
  return (
    <Container maxWidth="lg">
      {/* No need for selectedMenuItem */}
      <Typography variant="h4" gutterBottom>
        {pageComponent.props.label} {/* Display the label */}
      </Typography>
      {pageComponent}
    </Container>
  );
};

export default MainContent;
