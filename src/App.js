import Header from "./components/Header/Header";
import "../src/components/Header/Header.css";
import "../src/components/BlockSection/BlockSection.css";
import "../src/components/AboutSection/AboutSection.css";
import "../src/components/ServicesSection/ServicesSection.css";
import "../src/components/PopularSection/PopularSection.css";
import "../src/components/TakeSection/TakeSection.css";
import "../src/components/Footer/Footer.css";
import "../src/components/TestimonialSection/TestimonialSection.css";
import "../src/components/data.css";
import "../src/components/Task/Task.css";
import "./components/UserCard/UserCard.css";
import BlockSection from "./components/BlockSection/BlockSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import PopularSection from "./components/PopularSection/PopularSection";
import TakeSection from "./components/TakeSection/TakeSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import Footer from "./components/Footer/Footer";
import Data from "./components/data";
import data from "../src/components/data.json";
// import TaskData from "../src/components/Task";
// import Topic from "../src/components/Topic/topic";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import TaskData from "./components/Task/Task";
import UserCard from "./components/UserCard/UserCard";

function App() {
  console.log(data, "DATAAAAA");

  return (
    <div className="App">
      <Header />
      <BlockSection data={data?.banner} />
      <AboutSection data={data?.about} />
      <ServicesSection data={data?.items} />
      <PopularSection data={data} />
      <TakeSection data={data?.take} />
      <TestimonialSection />
      <Footer />
      {/* <Data /> */}
     
      {/* { <EmployeeTable /> } 
        <TaskData /> 
        <UserCard />
              <EmployeeTable />  */}

    </div>
  );
}

export default App;
