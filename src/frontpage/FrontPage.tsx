import { ContentlBlock } from "./ContentlBlock";
import { Footer } from "./Footer";
import { Header } from "./Header";

const FrontPage: React.FC = () => {
  return (
    <div>
      <Header />
      <ContentlBlock />
      <Footer />
    </div>
  );
};
export default FrontPage;
