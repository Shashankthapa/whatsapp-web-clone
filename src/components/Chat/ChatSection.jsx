import demoProfileImg from "../../assets/shahrukh.jpg";
import ChatSectionSearchBar from "./ChatSectionSearchBar";
import ProfileHeading from "../Profile/ProfileHeading";
import ProfileBody from "../Profile/ProfileBody";
import Footer from "../Profile/ProfileFooter";
import ChatHeader from "./ChatHeader";
import ChatMembersSection from "./ChatMembersSection";
import "../Chat/ChatSection.css";

const chatSection = () => {
  return (
    <div className="main-container">
      <div className="main-container-green-container w-full">
      </div>
      <div className="ChatSection flex justify-center">
        <section className="chat-section w-5/12 border">
          <ChatHeader img={demoProfileImg} />
          <ChatSectionSearchBar/>
          <ChatMembersSection />
        </section>
        <section className="flex flex-col w-screen">
          <ProfileHeading />
          <ProfileBody />
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default chatSection;
