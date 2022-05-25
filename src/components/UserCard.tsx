import { VFC } from "react";
import { UserProfile } from "../types/userProfile";

//型を定義されたpropsを“Props”という名前で引っ張ってくる
type Props = {
  user: UserProfile;
};

export const UserCard: VFC<Props> = (props) => {
  //propsを実際に宣言
  const { user } = props;

  const style01 = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"
  };

  //表示内容
  return (
    <div style={style01}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
