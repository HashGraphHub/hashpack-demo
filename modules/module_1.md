# <span style="color:#f9b000">Project framework</span>

![Project framework](https://static.didcoding.com/media/tutorials/hederahashgraph_how_to/how_to_build_a_hedera_app_1.jpg "Project framework")


<span style="color:#f9b000">Feel free to use this repo as a 'cheat sheet'</span>
***
***

## Prerequisites
- Docker
- Docker-Compose
- Docker desktop

***
***

## Our stack

## What is Hedera?
<a href="https://hedera.com/" style="color: #9c07b6">Hedera</a> is a decentralized, open-source, proof-of-stake public ledger that utilizes the leaderless, asynchronous Byzantine Fault Tolerance (aBFT) hashgraph consensus algorithm. It is governed by a collusion-resistant, decentralized council of leading enterprises, universities, and web3 projects from around the world.

## What is Django?
<a href="https://www.djangoproject.com/" style="color: #9c07b6">Django</a> is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

## What is Docker?
<a href="https://www.docker.com/" style="color: #9c07b6">Docker</a> takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development – desktop and cloud. Docker’s comprehensive end to end platform includes UIs, CLIs, APIs and security that are engineered to work together across the entire application delivery lifecycle.

## What is Carbon Components Svelte?
<a href="https://www.docker.com/" style="color: #9c07b6">Carbon Components Svelte</a> is a Svelte component library that implements the Carbon Design System, an open source design system by IBM. Design systems facilitate design and development through reuse, consistency, and extensibility.

***
***

## Getting started

Now that we know what tech stack we're using we can begin creating the framework. In the interest of time, I have build a basic framework that we can build on.

1) Create a new directory on your local machine. I have called mine hashgraphhub. This is your 'root directory'.

2) Open a terminal and cd into the root directory.

3) You can now clone the module_1 branch. You can do this a few different ways. I use SSH...

```
#option 1 - SSH
git clone --branch module_1 git@github.com:HashGraphHub/hashpack-demo.git .

#option 2 - Github CLI
gh repo clone HashGraphHub/hashpack-demo .
git checkout module_1

#option 3 - HTTPS
git clone --branch module_1 https://github.com/HashGraphHub/hashpack-demo.git .
```

***
***

## Environment variables
Create a new .env file for the project and add your own information as required
```
# windows machine
copy env.template .env
cd app/frontend
copy env.template .env
cd ../..

#mac/linux
cp env.template .env
cd app/frontend
cp env.template .env
cd ../..
```

***
***

## Logging directory
Create a new logs dir in backend
```
cd app/backend
mkdir logs
cd logs && echo This is our celery log > celery.log && echo This is our api log > api.log
cd ../../..
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

## Finish up

You should be able to see the fruits of our labour by visiting http://localhost:8000/api/v1/
