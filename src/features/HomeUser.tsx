import UIContainer from "../UI/Container";
import UIFeedbackLoading from "../UI/Feedback/Loading";
import { useChems } from "../data/hooks/compounds";

const HomeUserPage = () => {
  const chems = useChems()
  return <>
    {chems.isLoading && <UIFeedbackLoading />}
    <UIContainer>
      {chems.data && !chems.isLoading && <>
        <h1>Test</h1>
      </>}
    </UIContainer>
  </>
}
 
export default HomeUserPage;