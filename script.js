function GetData(){
    const url = "https://randomuser.me/api/?results=10" //Link API requested
    let req = new XMLHttpRequest()
    req.open("GET", url)
    req.responseType = 'json'
    req.send()
    req.onload = function(){
        let users = req.response
        ShowData(users)
    }
    function ShowData(JsonObj){
        let data = JsonObj.results
        data.forEach(user => {

            let name = document.createElement('p')
            let age = document.createElement('p')
            let evaluation = document.createElement('p')
            let Userphoto = document.createElement('img')

            //Divs
            let MainDiv = document.getElementById('MainDiv')
            let UserBlock = document.createElement('div')
            let UserInfo = document.createElement('div')
            let UserOpinion = document.createElement('div')
            let Photo = document.createElement('div')
            let UserSpace = document.createElement('div')

            //Getting Informations
            name.appendChild(document.createTextNode(`Name: ${user.name.first}`))

            age.appendChild(document.createTextNode(`Age: ${user.registered.age}`))

            evaluation.appendChild(document.createTextNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore rerum totam dolorem aspernatur ea, quas dicta molestiae beatae! Reiciendis iure quas totam non laboriosam mollitia expedita dolorem. Quibusdam necessitatibus ex, ab debitis magnam itaque quo animi architecto ad, sint ipsam maxime pariatur ducimus facilis quidem saepe aut nostrum voluptas commodi?"))

            Userphoto.setAttribute('src', user.picture.large)

            //Putting data in Divs
            Photo.appendChild(Userphoto)
            UserInfo.appendChild(name)
            UserInfo.appendChild(age)
            UserSpace.appendChild(Photo)
            UserSpace.appendChild(UserInfo)
            UserOpinion.appendChild(evaluation)
            UserBlock.appendChild(UserSpace)
            UserBlock.appendChild(UserOpinion)
            MainDiv.appendChild(UserBlock)

            //Setting atributes for Divs
            MainDiv.setAttribute('id', 'MainDiv')
            UserBlock.setAttribute('id', 'UserBlock')
            UserInfo.setAttribute('id', 'UserInfo')
            UserOpinion.setAttribute('id', 'UserOpinion')
            UserSpace.setAttribute('id', 'UserSpace')
            Userphoto.setAttribute('id', 'Userphoto')
            Photo.setAttribute('id', 'Photo')
           

                });
    }
};
GetData()
