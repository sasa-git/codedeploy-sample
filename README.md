## buildspec TIP

https://hub.docker.com/settings/security でdocker hub のアクセストークンを取得し、自分のアカウントでDocker hub にログインすることで、Build時にpull制限を回避できる

トークンやユーザーネーム情報は、AWSの`AWS Systems Manager > パラメータストア`に格納されている  
https://ap-northeast-1.console.aws.amazon.com/systems-manager/parameters/?region=ap-northeast-1&tab=Table

あとは、

```
env:
  parameter-store:
    DOCKER_USER: dockerhub-user
    DOCKER_TOKEN: dockerhub-token
```

と書くとbuild時に環境変数が設定される！！！