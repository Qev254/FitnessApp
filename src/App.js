// fitness/client/src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent'; // Import the MainContent component
import Dashboard from './components/pages/Dashboard/Dashboard'; // Import the Dashboard component
import BillReminders from './components/pages/BillReminders/BillReminders'; // Import the BillReminders component
import Budget from './components/pages/Budget/Budget'; // Import the Budget component
import Customization from './components/pages/Customization/Customization'; // Import the Customization component
import DebtManagement from './components/pages/DebtManagement/DebtManagement'; // Import the DebtManagement component
import Feedback from './components/pages/Feedback/Feedback'; // Import the Feedback component 
import HelpSupport from './components/pages/HelpSupport/HelpSupport'; // Import the HelpSupport component 
import SavingsGoals from './components/pages/SavingsGoals/SavingsGoals'; // Import the SavingsGoals component 
import PrivacyPolicy from './components/pages/PrivacyPolicy/PrivacyPolicy'; // Import the PrivacyPolicy component 
import TermsAndConditions from './components/pages/TermsAndConditions/TermsAndConditions'; // Import the TermsAndConditions component
import Logout from './components/pages/Logout/Logout'; // Import the Logout component 
import './App.css';
import pageComponents from './components/MainContent'; // Import the pageComponents object

function App() {
  const [currentPage, setCurrentPage] = useState(Dashboard); // Set default page component

  const handleMenuItemClick = (pageLabel) => {
    console.log('Clicked menu item:', pageLabel);
    setCurrentPage(pageComponents[pageLabel]); // Set the selected page component
  };

  return (
    <div className="App">
      <Header />
      <div id="MainContentWrapper">
        <Sidebar onMenuItemClick={handleMenuItemClick} />
        <MainContent pageComponent={currentPage} />
      </div>
      {/* Your other components and content */}
    </div>
  );
}

// function App() {
//   const [currentPage, setCurrentPage] = useState(Dashboard); // Set default page component

//   const handleMenuItemClick = (pageLabel) => {
//     console.log('Clicked menu item:', pageLabel);
//     setCurrentPage(pageComponents[pageLabel]); // Use pageComponents to get the corresponding page component
//   };

//   return (
//     <div className="App">
//       <Header />
//       <div id="MainContentWrapper">
//         <Sidebar onMenuItemClick={handleMenuItemClick} />
//         <MainContent pageComponent={currentPage} />
//       </div>
//       {/* Your other components and content */}
//     </div>
//   );
// }

export default App;
