import { useState, type ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import BookPage from './pages/BookPage';
import MentorshipPage from './pages/MentorshipPage';
import ContactPage from './pages/ContactPage';
import BudgetingPage from './pages/BudgetingPage';
import AffiliatesPage from './pages/AffiliatesPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const pages: Record<string, ReactNode> = {
    home: <HomePage navigate={navigate} />,
    products: <ProductsPage navigate={navigate} />,
    book: <BookPage />,
    mentorship: <MentorshipPage />,
    contact: <ContactPage />,
    budgeting: <BudgetingPage />,
    affiliates: <AffiliatesPage />,
  };

  return (
    <div className="min-h-screen bg-bg-primary text-white font-sans">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main>{pages[currentPage]}</main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;
