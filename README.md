# Welcome to Space Base!

Need a space to call your own? There's plenty out here, just exit the atmosphere! At Space Base, you have your own space to post about exciting life events to show your friends, and comment on your friends' posts! You can sign up or login with a username, password, and avatar image to represent you! Made a mistake with your comments? Feel free to edit or delete them, but try to delete your friend's comments and you'll be out of luck! Only the user who creates their comments can alter them.

## Installation

Starting off, this project requires Rails for the back end API, and React for the front end. Clone this repository, cd into it, and then run:

```bash
bundle install 
```

following that, open up two more tabs in the terminal, the first for non-server use, the second for running:

 ```bash
rails db:migrate
rails s
```

and the third, cd into the client directory, and then run: 

 ```bash
npm install
npm start
```

## Usage

When the application starts up in your browser, you start at the login/signup page. You can sign up if you are a new user with an avatar URL, a username, and a password. A username and password are required, but the avatar is optional. After you log in, you are navigated to the user profile landing page. At the top there is a header, where you can navigate around the site. There is a Post route, a Comment route, and a User Profile route, and you can logout when you are finished.

![Screen Shot 2023-06-04 at 1 22 55 AM](https://github.com/JamesSalcedo001/social_app/assets/107723341/7e9590d6-814b-4165-99e7-c8bd01f15b1a)


![Screen Shot 2023-06-04 at 1 23 16 AM](https://github.com/JamesSalcedo001/social_app/assets/107723341/6cb22b82-ebeb-444c-84bd-3369005ca188)


![Screen Shot 2023-06-04 at 1 23 28 AM](https://github.com/JamesSalcedo001/social_app/assets/107723341/53e28780-4f87-4682-8b94-e49eea5aaa29)

![Screen Shot 2023-06-04 at 1 23 49 AM](https://github.com/JamesSalcedo001/social_app/assets/107723341/223b62e5-4c54-4062-b58a-fc4434e71dbf)


![Screen Shot 2023-06-04 at 1 24 23 AM](https://github.com/JamesSalcedo001/social_app/assets/107723341/724df68c-247b-47cc-8fb3-a7e0598422a1)


![Screen Shot 2023-06-04 at 1 24 53 AM](https://github.com/JamesSalcedo001/social_app/assets/107723341/6354040d-b4c4-462f-afa7-837fe8a8af8c)

![Screen Shot 2023-06-04 at 1 25 17 AM](https://github.com/JamesSalcedo001/social_app/assets/107723341/3148c311-f177-4540-a8ea-8359ec02a6c2)

![Screen Shot 2023-06-04 at 1 25 52 AM](https://github.com/JamesSalcedo001/social_app/assets/107723341/61d7445e-32f3-4b30-beed-262b289233e9)



## Models and their Relationships

````python
# Models

"User"

"Comment"

"Post"




#Relationships

1: User:
"has_many comments"
"has_many posts through comments"

2: Comment:
"belongs_to a user"
"belongs_to a post"

3: Post:
"has_many comments"
"has_many users through comments"


````


```python
Routing:

# home route
"/"

# login route
"/login"

# signup route
"/signup"

# post route
"/post_list"

# comment route
"/comment_list"

```

## Credit

These images are not owned by me, the moon is from a site called Flaticon, and the background is from a site called Wallpaperset! Check them out!


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
