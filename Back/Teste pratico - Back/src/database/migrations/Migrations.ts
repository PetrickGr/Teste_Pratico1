import { BaseDatabase } from "../BaseDatabase";
import { CarDatabase } from "../CarDatabase";
import { PersonDatabase } from "../PersonDatabase";
import { ReviewDatabase } from "../ReviewDatabase";
import { Cars, Link_Ids, Person, Review } from "./data";

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error: any) {
            console.log("Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }
    createTables = async () => {
        await BaseDatabase.connection.raw(`
        drop table if exists ${ReviewDatabase.Link_Ids};
        drop table if exists ${ReviewDatabase.Reviews};
        drop table if exists ${CarDatabase.Cars};
        drop table if exists ${PersonDatabase.Person};

        CREATE TABLE IF NOT EXISTS ${PersonDatabase.Person}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            age INT NOT NULL,
            gender VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${CarDatabase.Cars}(
            id VARCHAR(255) PRIMARY KEY,
            licenseplate VARCHAR(255) NOT NULL UNIQUE,
            brands VARCHAR(255) NOT NULL
        ); 
        
        CREATE TABLE IF NOT EXISTS ${ReviewDatabase.Reviews}(
            id VARCHAR(255) NOT NULL PRIMARY KEY,
            datestartreview TIMESTAMP NOT NULL,
            dateendreview TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS ${ReviewDatabase.Link_Ids}(
            idperson VARCHAR(255) NOT NULL,
            idcar VARCHAR(255) NOT NULL,
            idreview VARCHAR(255),
            FOREIGN KEY (idperson) REFERENCES ${PersonDatabase.Person}(id),
            FOREIGN KEY (idcar) REFERENCES ${CarDatabase.Cars}(id),
            FOREIGN KEY (idreview) REFERENCES ${ReviewDatabase.Reviews}(id)
            );
        `)
    }
    insertData = async () => {
        await BaseDatabase
            .connection(PersonDatabase.Person)
            .insert(Person)
        await BaseDatabase
            .connection(CarDatabase.Cars)
            .insert(Cars)
        await BaseDatabase
            .connection(ReviewDatabase.Reviews)
            .insert(Review)
        await BaseDatabase
            .connection(ReviewDatabase.Link_Ids)
            .insert(Link_Ids)
    }
}
const migrations = new Migrations()
migrations.execute()