# Авторсий Блог на базе Create React App

### Области хранения данных:

-   база данных на MongoDB
-   redux store

### Сущности приложения:

-   пользователь: БД (список пользователей), Cookies(JWT) (сессия текущего), store (отображение в браузере)
-   роль пользователя: БД (список ролей), Cookies(JWT) (сессия пользователя с ролью), store (использование на клиенте)
-   статья: БД (список статей), store (отображение в браузере)
-   комментарии: БД (список комментариев), store (отображение в браузере)

### Таблицы БД:

-   пользователи - users: id / login / password / registered_at / role_id
-   роли - roles: id / name
-   статьи - posts: id / title / image_url / content / published_at
-   комментарии - comments: id / author_id / post_id / content

### Сессия состояния на BFF:

-   сессия текущего пользователя: login / password / role

### Схема для redux store (на клиенте)

-   user: id / login / role_id / session
-   posts: массив post: id / title / imageUrl / published_at / commentsCount
-   post: id / title / imageUrl / content / published_at / comments: массив comment: id / author / content / published_at
-   users: массив user: id / login / registered_at / role
