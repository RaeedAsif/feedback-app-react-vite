import { CreateFeedbackForm } from "../../features/CreateFeedback";
import { PageWrapper } from "../../features/CreateFeedback/style";
import Navbar from "../../features/Navbar";

export const CreateFeedback:React.FC = () => {
  return (
    <>
      <Navbar/>
      <PageWrapper>
        <CreateFeedbackForm />
      </PageWrapper>
    </>
  );
};