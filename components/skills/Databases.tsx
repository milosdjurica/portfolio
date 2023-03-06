import React from "react";
import IconHolder from "./IconHolder";
import FirebaseIcon from "./skillsIcons/FirebaseIcon";
import MongoDBIcon from "./skillsIcons/MongoDBIcon";
import MySQLIcon from "./skillsIcons/MySQLIcon";
import PostgreSQLIcon from "./skillsIcons/PostgreSQLIcon";

function Databases() {
  return (
    <div className="text-center space-y-5">
      <h2 className="green-underline p-2 font-bold text-2xl">DATABASES</h2>
      <div className="flex flex-wrap justify-center items-center">
        <IconHolder title="MongoDB" icon={<MongoDBIcon />} />
        <IconHolder title="MySQL" icon={<MySQLIcon />} />
        <IconHolder title="PostgreSQL" icon={<PostgreSQLIcon />} />
        <IconHolder title="Firebase" icon={<FirebaseIcon />} />
      </div>
    </div>
  );
}

export default Databases;
