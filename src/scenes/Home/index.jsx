import { Button } from "antd";
import useCurrentAccount from "hooks/useCurrentAccount";

const Home = () => {
  const { signOut } = useCurrentAccount();
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={signOut}>ログアウト</Button>
    </div>
  );
};

export default Home;
