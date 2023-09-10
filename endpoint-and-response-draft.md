### エンドポイントとレスポンスの原案

__ユーザの作成__

エンドポイント : POST /users

レスポンス : 
```
{
    "message":"ユーザが正常に作成されました"
}
```
<br>


__ユーザの削除__

エンドポイント : DELETE /users/{id}

レスポンス : 
```
{
    "message":"ユーザが正常に削除されました"
}
```
<br>


__ユーザのタスク一覧取得__

エンドポイント : GET /users/{id}/tasks

レスポンス : 
```
[
    {
        "title": "{taskTitle}",
        "status": "{taskStatus}",
        "deadline": "{taskDeadline}"
    },
    {
        "title": "{taskTitle}",
        "status": "{taskStatus}",
        "deadline": "{taskDeadline}"
    }
]
```
<br>


__ユーザのタスク作成__

エンドポイント : POST /users/{id}/tasks

レスポンス : 
```
{
    "message": "タスクが正常に作成されました"
}
```
<br>


__ユーザのタスク削除__

エンドポイント : DELETE /users/{id}/tasks/{task_id}

レスポンス : 
```
{
    "message": "タスクが正常に削除されました"
}
```
