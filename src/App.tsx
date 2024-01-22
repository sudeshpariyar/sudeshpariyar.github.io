import "./app.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ContentWrapper from "./shared/content-wrapper/ContentWrapper";
import background from "./asset/background.jpg";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div
        className="app-body-wrapper"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <ContentWrapper>
          <div className="launching-wrapper">Launching Soon develop branch</div>
        </ContentWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default App;
