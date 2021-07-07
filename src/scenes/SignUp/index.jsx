import { Button, Form, Input, notification } from "antd";
import { useHistory } from "react-router";
import styles from "./style.module.scss";
import { useMutation } from "@apollo/client";
import { SIGN_UP_ACCOUNT_MUTATION } from "data/account/graphql/mutation";
import PersistenceKeys from "../../utilities/constants/persistenceKeys";
const SignUp = () => {
  const history = useHistory();
  const [signUp, { data }] = useMutation(SIGN_UP_ACCOUNT_MUTATION);
  const onFinish = async (value) => {
    if (value.password !== value.passwordConfirmation)
      return notification.error({ message: "パスワードが一致していません" });
    await signUp({
      variables: {
        username: value.username,
        email: value.email,
        password: value.password,
        passwordConfirmation: value.passwordConfirmation,
      },
    });
    notification.success({ message: "新規登録に成功しました" });
    localStorage.setItem(PersistenceKeys.AUTH_TOKEN, data.token);
    history.push("/");
  };
  return (
    <div className={styles.signUpBox}>
      <Form layout="vertical" className={styles.form} onFinish={onFinish}>
        <h1 className={styles.title}>新規登録</h1>
        <Form.Item
          name="username"
          label="ユーザーネーム"
          required
          rules={[{ required: true, message: "ユーザーネームは必須です" }]}
        >
          <Input placeholder="coadmap@mail.com" />
        </Form.Item>
        <Form.Item
          name="email"
          label="メールアドレス"
          required
          rules={[{ required: true, message: "メールアドレスは必須です" }]}
        >
          <Input placeholder="coadmap@mail.com" />
        </Form.Item>
        <Form.Item
          name="password"
          label="パスワード"
          required
          rules={[
            { required: true, message: "パスワードは必須です" },
            { min: 8, message: "パスワードは8文字以上入力してください" },
          ]}
        >
          <Input.Password placeholder="パスワードを入力" />
        </Form.Item>
        <Form.Item
          name="passwordConfirmation"
          label="パスワード(確認用)"
          required
          rules={[{ required: true, message: "パスワード(確認用)は必須です" }]}
        >
          <Input.Password placeholder="パスワードを入力" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            新規登録
          </Button>
        </Form.Item>
        <Form.Item>
          <Button block onClick={() => history.push("sign_in")}>
            ログインはこちら
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignUp;
