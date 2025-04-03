import CreatePost from "../pages/Homepage/Homepage Components/CreatePost";
import PeopleYouMayKnow from "../pages/Homepage/Homepage Components/PeopleYouMayKnow";
import ShowFeeds from "../pages/Homepage/Homepage Components/ShowFeeds";

type MainProps = {
  isMenuOpen: boolean;
};

function Main({ isMenuOpen }: MainProps) {
  return (
    <main className="bg-IceBlue pt-5">
      <CreatePost isMenuOpen={isMenuOpen} />
      <ShowFeeds />
      <PeopleYouMayKnow />
    </main>
  );
}

export default Main;
