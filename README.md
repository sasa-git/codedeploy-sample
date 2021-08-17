# buildspec TIP

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


# usage

```
npm install
node index.js

# access to localhost:3000 by browser
# ---output---
# {"NODE_VERSION":"14.17.5","TEST_ENV":"sasa","YARN_VERSION":"1.22.5","HOSTNAME":"ip-172-31-22-253.ap-northeast-1.compute.internal","HOME":"/root","AWS_EXECUTION_ENV":"AWS_ECS_FARGATE","TEST_ENV2":"hogehoge","AWS_DEFAULT_REGION":"ap-northeast-1","ECS_CONTAINER_METADATA_URI_V4":"http://169.254.170.2/v4/b4c4ce51faf4403b993da6641e222b35-3074346398","ECS_CONTAINER_METADATA_URI":"http://169.254.170.2/v3/b4c4ce51faf4403b993da6641e222b35-3074346398","PATH":"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin","AWS_REGION":"ap-northeast-1","PWD":"/usr/src/app"}
```
