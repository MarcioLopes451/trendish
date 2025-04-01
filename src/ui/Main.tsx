import CreatePost from "../pages/Homepage/Homepage Components/CreatePost";

type MainProps = {
  isMenuOpen: boolean;
};

function Main({ isMenuOpen }: MainProps) {
  return (
    <main className="bg-IceBlue pt-5">
      <CreatePost isMenuOpen={isMenuOpen} />
    </main>
  );
}

export default Main;
