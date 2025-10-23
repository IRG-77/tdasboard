import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import AccommodationsPage from "./pages/AccommodationsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ContactsPage from "./pages/ContactsPage";


import Sidebar from "./components/common/Sidebar";
import TopNavigation from "./components/common/TopNavigation";
import LogoBar from "./components/common/LogoBar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
	      return (
	            <div className='flex min-h-screen bg-gray-900 text-gray-100'>
		                  	{/* BG */}
			                  <div className='fixed inset-0 z-0'>
				                  <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				                  <div className='absolute inset-0 backdrop-blur-sm' />
			                  </div>

												{/* Top Navigation for large screens */}
												<div className="hidden lg:block">
													<TopNavigation />
												</div>

												{/* Logo Bar for small/medium screens */}
												<div className="lg:hidden">
													<LogoBar />
												</div>

												{/* Sidebar for small/medium screens only */}
												<Sidebar />
												
												{/* Main content area */}
												<div className="flex-1 flex flex-col lg:pt-8 pt-16">
													<ScrollToTop />
													<Routes>
														<Route path='/' element={<HomePage/>}/>
														<Route path='/location' element={<LocationPage />} />
														<Route path='/accommodations' element={<AccommodationsPage />} />
														<Route path='/activities' element={<ActivitiesPage />} />
														<Route path='/contacts' element={<ContactsPage />} />
													</Routes>
													<Footer />
												</div>
	              </div>
				); 	
}

export default App;

