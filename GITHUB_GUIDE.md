# GitHubでの公開手順 (GitHub Pages)

このゲームをGitHub Pagesを使って無料で公開する手順です。

## 1. GitHubリポジトリの作成
1. [GitHub](https://github.com/) にログインします。
2. 右上の「+」アイコンから **「New repository」** を選択します。
3. **Repository name** に `comida-typing` など好きな名前を入力します。
4. **Public** (公開) が選ばれていることを確認します。
5. **「Create repository」** をクリックします。

## 2. コードのアップロード (プッシュ)
このフォルダですでにGitの初期化とコミットは完了させました。
あとは、作成したGitHubリポジトリに向けて以下のコマンドを実行するだけです。

コマンドプロンプト（またはPowerShell）で、このフォルダ (`C:\Users\shogo\.gemini\antigravity\scratch\comida_typing`) を開き、以下のコマンドを順番に入力してください。
※ `[YOUR_USERNAME]` はあなたのGitHubユーザー名に置き換えてください。

```bash
git branch -M main
git remote add origin https://github.com/[YOUR_USERNAME]/comida-typing.git
git push -u origin main
```

## 3. GitHub Pages の設定
1. GitHubのリポジトリページを開きます。
2. 上部のタブから **「Settings」** をクリックします。
3. 左側のメニューから **「Pages」** をクリックします。
4. **Build and deployment** > **Source** が「Deploy from a branch」になっていることを確認します。
5. **Branch** のところを `main` にし、フォルダは `/(root)` のまま **「Save」** をクリックします。
6. 数分待つと、ページ上部に「Your site is live at...」とURLが表示されます。これが公開用URLです！
