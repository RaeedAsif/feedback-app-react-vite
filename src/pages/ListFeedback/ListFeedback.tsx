import { PageWrapper } from "../../features/ListFeedback/style";
import { ListFeedbackTable } from "../../features/ListFeedback";
import Navbar from "../../features/Navbar";

export const ListFeedback:React.FC = () => {
  return (
    <>
    <Navbar/>
    <PageWrapper>
      <ListFeedbackTable />
    </PageWrapper>
    </>

  );
};