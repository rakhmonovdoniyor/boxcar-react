import React from "react";
import { Route, Routes } from "react-router-dom";

import ForgotPasswordPage from "./components/auth/forgot-password";
import RequireSession from "./components/auth/require-session";
import SignInPage from "./components/auth/sign-in";
import SignUpPage from "./components/auth/sign-up";
import BlogListPage from "./components/blog";
import BlogDetailPage from "./components/blog/detail";
import BlogListWithSidebarPage from "./components/blog/list-with-sidebar";
import DashboardAddListingPage from "./components/dashboard/add-listing";
import DashboardFavoritesPage from "./components/dashboard/favorites";
import DashboardOverviewPage from "./components/dashboard";
import DashboardListingsPage from "./components/dashboard/listings";
import DashboardMessagesPage from "./components/dashboard/messages";
import DashboardProfilePage from "./components/dashboard/profile";
import DashboardSavedSearchPage from "./components/dashboard/saved-search";
import DashboardShell from "./components/dashboard/shell";
import HomePage from "./components/homepage";
import NumScrollDemo from "./components/homepage/carusel/prime";
import InventoryPage from "./components/inventory";
import InventoryDetailPage from "./components/inventory/detail";
import InventoryDetailGalleryPage from "./components/inventory/detail-gallery";
import InventoryListViewPage from "./components/inventory/list-view";
import InventoryMapListViewPage from "./components/inventory/map-list-view";
import InventoryMapViewPage from "./components/inventory/map-view";
import InventorySidebarPage from "./components/inventory/sidebar";
import AboutPage from "./components/other/about";
import AutoLoanCalculatorPage from "./components/other/auto-loan-calculator";
import CompareVehiclePage from "./components/other/compare-vehicle";
import ContactPage from "./components/other/contact";
import DealerListPage from "./components/other/dealer-list";
import DealerSinglePage from "./components/other/dealer-single";
import FaqPage from "./components/other/faq";
import MembershipPlansPage from "./components/other/membership-plans";
import NotFoundPage from "./components/other/not-found";
import TeamListPage from "./components/other/team-list";
import TeamSinglePage from "./components/other/team-single";
import ShopPage from "./components/shop";
import ShopCartPage from "./components/shop/cart";
import ShopCheckoutPage from "./components/shop/checkout";
import ShopOrderCompletePage from "./components/shop/complete";
import ShopDetailPage from "./components/shop/detail";
import ShopShell from "./components/shop/shell";
import RouteScrollReset from "./components/shared/route-scroll-reset";
import ScrollToTopButton from "./components/shared/scroll-to-top-button";

const Router = () => {
  return (
    <div>
      <RouteScrollReset />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/loan-calculator" element={<AutoLoanCalculatorPage />} />
        <Route path="/compare" element={<CompareVehiclePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/membership-plans" element={<MembershipPlansPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/team" element={<TeamListPage />} />
        <Route path="/team/:slug" element={<TeamSinglePage />} />
        <Route path="/dealers" element={<DealerListPage />} />
        <Route path="/dealers/:slug" element={<DealerSinglePage />} />
        <Route element={<RequireSession />}>
          <Route path="/dashboard" element={<DashboardShell />}>
            <Route index element={<DashboardOverviewPage />} />
            <Route path="listings" element={<DashboardListingsPage />} />
            <Route path="add-listing" element={<DashboardAddListingPage />} />
            <Route
              path="edit-listing/:listingId"
              element={<DashboardAddListingPage />}
            />
            <Route path="favorites" element={<DashboardFavoritesPage />} />
            <Route path="saved-search" element={<DashboardSavedSearchPage />} />
            <Route path="messages" element={<DashboardMessagesPage />} />
            <Route path="profile" element={<DashboardProfilePage />} />
          </Route>
        </Route>

        <Route path="/blog" element={<BlogListPage />} />
        <Route
          path="/blog/list-02"
          element={<BlogListWithSidebarPage variant="list-02" />}
        />
        <Route
          path="/blog/list-03"
          element={<BlogListWithSidebarPage variant="list-03" />}
        />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />

        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/list" element={<InventoryListViewPage />} />
        <Route path="/inventory/map-list" element={<InventoryMapListViewPage />} />
        <Route path="/inventory/map" element={<InventoryMapViewPage />} />
        <Route path="/inventory/sidebar" element={<InventorySidebarPage />} />
        <Route
          path="/inventory/:vehicleId/gallery"
          element={<InventoryDetailGalleryPage />}
        />
        <Route path="/inventory/:vehicleId" element={<InventoryDetailPage />} />

        <Route path="/shop" element={<ShopShell />}>
          <Route index element={<ShopPage />} />
          <Route path="cart" element={<ShopCartPage />} />
          <Route path="checkout" element={<ShopCheckoutPage />} />
          <Route path="complete" element={<ShopOrderCompletePage />} />
          <Route path=":productId" element={<ShopDetailPage />} />
        </Route>

        <Route path="/prime" element={<NumScrollDemo />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTopButton />
    </div>
  );
};

export default Router;
