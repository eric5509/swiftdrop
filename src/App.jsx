import { Route, Routes, useLocation } from "react-router-dom";
import Sidenav from "./Components/Nav/Sidenav";
import TopNav from "./Components/Nav/TopNav";
import OverViewPage from "./Pages/overview/page";
import OrderPage from "./Pages/orders/page";
import MenuPage from "./Pages/menu/page";
import PaymentPage from "./Pages/payment/page";
import DisputePage from "./Pages/dispute/page";
import SigninPage from "./Pages/signin/page";
import SignupPage from "./Pages/signup/page";
import Test from "./Pages/test/page";
import Homepage from "./Pages/home/page";
import MainNav from "./Components/Nav/MainNav";

export default function App() {
  const homeLinks = ["/", "/services", "/about", "/features"];
  const authLinks = ["/signin", "/signup", "/forgot-password"];
  const dashboardLinks = [
    "/overview",
    "/orders",
    "/menu",
    "/payment",
    "/dispute",
    "/discount",
  ];
  const pathname = useLocation().pathname;

  return (
    <div>
      <div
        className={`grid  ${
          authLinks.includes(pathname) || homeLinks.includes(pathname)
            ? " grid-cols-1"
            : " grid-cols-[250px_1fr]"
        } h-screen`}
      >
        <div
          className={`border-r-2  ${
            authLinks.includes(pathname) || homeLinks.includes(pathname) ? "hidden" : "block"
          }`}
        >
          <Sidenav />
        </div>
        <div className="bg-white flex flex-col overflow-y-auto">
          <div
            className={`h-14 ${
              authLinks.includes(pathname) || homeLinks.includes(pathname) ? "hidden" : "block"
            }`}
          >
            <TopNav />
          </div>
          <div className={`${dashboardLinks.includes(pathname) || authLinks.includes(pathname) ? 'hidden': 'block'}`}>
            <MainNav />
          </div>
          <div
            className={`overflow-y-auto bg-gray-100 ${
              authLinks.includes(pathname) ? "h-screen" : "height"
            }`}
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/overview" element={<OverViewPage />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/dispute" element={<DisputePage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
