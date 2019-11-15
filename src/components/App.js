import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./page/Dashboard/index";
import AllListingList from "./page/all-listing-list";
import CourseDetails from "./page/Course/listing-details";
import Location from "./page/all-location";
import Pricing from "./page/PricingPlan/pricing-plan";
import Faq from "./page/faq";
import About from "./page/About/about";
import Contact from "./page/contact";
import Cards from "./page/cards";
import HeaderStyle from "./page/header-style";
import BlogRightSide from "./page/blog-right-side";
import BlogGrid from "./page/blog-grid";
import BlogDetails from "./page/blog-details";
import AuthProfile from "./page/auth-profile";
import AuthDeshbord from "./page/UserDashboard/auth-deshbord";
import CheckoutBasic from "./page/checkout-basic";
import CheckoutAdvanced from "./page/advanced";
import Enterprise from "./page/enterprise";
import Invoice from "./page/invoice";
import AddListing from "./page/add-listing";
import Notifications from "./page/UserDashboard/notifications";
import CustomerDetail from "./page/CustomerDetail";
import CourseCategories from "./page/CourseCategories";
import SimilarCourses from "./page/SimilarCourses.jsx";

function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/all-listings-grid" component={SimilarCourses} />
        <Route path="/all-listings-list" component={AllListingList} />
        <Route path="/course-details:id" component={CourseDetails} />
        <Route path="/all-categories" component={CourseCategories} />
        <Route path="/all-locations" component={Location} />
        <Route path="/pricing-plans" component={Pricing} />
        <Route path="/faqs" component={Faq} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cards" component={Cards} />
        <Route path="/headers" component={HeaderStyle} />
        <Route path="/blog-right-sidebar" component={BlogRightSide} />
        <Route path="/blog-grid" component={BlogGrid} />
        <Route path="/blog-details:id" component={BlogDetails} />
        <Route path="/author-profile" component={AuthProfile} />
        <Route path="/dashboard-listings" component={AuthDeshbord} />
        <Route path="/checkout" component={CheckoutBasic} />
        <Route path="/advanced" component={CheckoutAdvanced} />
        <Route path="/enterprise" component={Enterprise} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/add-listing" component={AddListing} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/instructor-profile" component={CustomerDetail} />
      </Switch>
    </Router>
  );
}
export default App;
