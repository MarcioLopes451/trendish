import CreatePost from "../pages/Homepage/Homepage Components/CreatePost";
import ShowFeeds from "../pages/Homepage/Homepage Components/ShowFeeds";

type MainProps = {
  isMenuOpen: boolean;
};

function Main({ isMenuOpen }: MainProps) {
  return (
    <main className="bg-IceBlue pt-5">
      <CreatePost isMenuOpen={isMenuOpen} />
<<<<<<< HEAD
<<<<<<< HEAD
      <ShowFeeds />
=======
>>>>>>> 7b32922 (fix: fixed textarea Z-index issue when Menu is in open state)
=======
      <ShowFeeds />
>>>>>>> f0c6aa7 (feat: created ShowFeedsItem component to display dynamic feed items)
    </main>
  );
}

export default Main;
