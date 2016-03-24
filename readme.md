# How to use Timigula

### Get the code from GitHub

The command below will create the Timigula directory

    git clone https://github.com/Eminanza/Timigula.git
    cd Timigula

### Install all dependencies contained in the package.json

    npm install

### Install json-server

    npm install -g json-server

If you get an error on permissions, just use the sudo

    sudo install -g json-server

### Launch a json-server with our data.json (on port 5000)

Open a new terminal window and go in the Timigula directory

    json-server -p 5000 -w data.json

### Launch the web server (on port 3000)

Open a new terminal window and go in the Timigula directory

    npm start

## Now you have you web and data servers running

Just access the application via the URL

    http://localhost:3000