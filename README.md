<h2>1. Open backend folder and install the dependancies.</h2>

        npm i

<h2>2. Set the database.</h2>

Open my MySql Workbench and create new Schema with name

    underdb

` Set the default charset to utf-8`

Create new file with name **ormconfig.json** to set cofigurations for the typeorm. <br>
**The file must be in the backend folder.**
Just replace with your password and username.<br>
`The file should include the following code:`

        {
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "your_password",
        "database": "underdb",
        "synchronize": true,
        "logging": false,
        "entities": ["src/database/entities/**/*.ts"],
        "migrations": ["src/database/migration/**/*.ts"],
        "cli": {
            "entitiesDir": "src/database/entities",
            "migrationsDir": "src/database/migration"
        }
       }

Set the .env file following the example :<br>
**The file must be in the backend folder.**<br>
Make sure to replace `DB_USERNAME` and `DB_PASSWORD` with your data.

        PORT=3000
        DB_TYPE=mysql
        DB_HOST=localhost
        DB_PORT=3306
        DB_USERNAME=root
        DB_PASSWORD=your_password
        DB_DATABASE_NAME=underdb

If you need to test with some data.<br>
There is a prepared file in the root folder

Which is a self-contained file,
and import it in the **underdb** schema.

<h2>3. Open frontend folder and install the dependancies.</h2>

        npm i

To start the backend server open backend folder

        npm run start:dev

To start the client :

        ng serve --open

The port is http://localhost:4200/

<h2>4. Seed mockup data.</h2>

To seed the data, you can copy the content of the file `seed-under-db.sql` located at the root of the project and run it as sql query inside the MySQL Workbench in the `underdb` schema.<br>

In order to login you can use the administrator account with username `TheBoss` and password `password`.

If you want to seed only an administrator, you can do so by running the following script in the backend folder: 
         
         npm run seed
         
This will create an administrator account with username `Administrator` and password `password`.

Note that in order to seed the excisting data, you need to start fresh by first dropping the current `underdb` schema, creating it anew and then running the query or seeding only the administrator data.
