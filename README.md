# Main repository for HashGraph Hub
***
***

## Prerequisites
- Docker Compose

***
***

## Getting started
First you will need to clone down the first module.

1) Create a new directory on your local machine. I have called mine hashgraphhub. This is your 'root directory'.

2) Open a terminal and cd into the root directory.

3) You can now clone the develop branch. You can do this a few different ways. I use SSH...

```
#option 1 - SSH
git clone --branch develop git@github.com:HashGraphHub/hashpack-demo.git .

#option 2 - Github CLI
gh repo clone bobby-didcoding/open_planet .
git checkout develop

#option 3 - HTTPS
git clone --branch develop git@github.com:HashGraphHub/hashpack-demo.git .
```

***
***

## Environment variables
Create a new .env file for the project and add your won information as required
```
# windows machine
copy env.template HashGraphHub/.env

#mac/linux
cp env.template HashGraphHub/.env
```

***
***

## Fire up Docker
Use the following command to fire up Docker
```
docker-compose -f HashGraphHub/docker-compose.yml up -d --build --remove-orphans
```

***
***

### Push code changes to stage (Staging)
Open a fresh terminal and use the following commands to 
```
git add -A
git commit -m "my message"
git push -u origin develop
gh pr create --head develop --base stage
***Type a title
***Type a body (optional)
***Press enter on 'Submit'
gh pr merge <pr number>
***Press enter on 'Click create merge commit'
***Type 'N'
***Press enter on 'Submit'
```

***
***

### Push code changes to main (Production)
Open a fresh terminal and use the following commands to 
```
gh pr create --head stage --base main
***Type a title
***Type a body (optional)
***Press enter on 'Submit'
gh pr merge <pr number>
***Press enter on 'Click create merge commit'
***Type 'N'
***Press enter on 'Submit'
```

***
***
