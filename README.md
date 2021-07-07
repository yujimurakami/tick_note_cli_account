# react-rails-app_client

## 概要

graphql を使ったアプリを作れる最小構成のボイラープレートです。

## あらかじめ導入されているもの

- React
- recoil
- sass
- axios
- react-router-dom
- reset-css
- @apollo/client
- graphql

## 使い方

1. ローカルにひっぱってきたら

```
npm install
npm start
```

http://localhost:3500
で立ち上がります。

### フォルダ構造(src内)
<pre>
└── src
    ├── components: 使い回すことのできる要素を置く
    ├── data: バックエンドと通信するときに使う
    ├── hooks: 複数のcomponentで使われる関数を置く
    ├── scenes: 各ページの呼び出し先
    ├── styles: styleの設定を置く
    └── utilities: tsx内で使用する変数、定数など、全体で使用する要素を置く
        ├── AuthRouter: 認証用のrouter
        └── constants: 定数を置く
</pre>