import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  //カスタムフックを宣言
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  //オンクリックイベントの関数を設定
  const onClickFetchUser = () => {
    getUsers();
  };

  //ここから下が処理もといレンダリング
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Now Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
