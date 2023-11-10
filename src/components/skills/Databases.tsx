import React from "react";
import IconHolder from "./IconHolder";
import MongoDBIcon from "./skillsIcons/MongoDBIcon";
import MySQLIcon from "./skillsIcons/MySQLIcon";
import PostgreSQLIcon from "./skillsIcons/PostgreSQLIcon";
import SupabaseIcon from "./skillsIcons/Supabase";

function Databases() {
  return (
    <div className="text-center space-y-5">
      <h2 className="green-underline p-2 font-bold text-2xl">DATABASES</h2>
      <div className="flex flex-wrap justify-center items-center">
        <IconHolder title="MongoDB" icon={<MongoDBIcon />} />
        <IconHolder title="MySQL" icon={<MySQLIcon />} />
        <IconHolder title="PostgreSQL" icon={<PostgreSQLIcon />} />
        <IconHolder title="Supabase" icon={<SupabaseIcon />} />

        {/* <IconHolder title="PostgreSQL" icon={<PostgreSQLIcon />} /> */}
      </div>
    </div>
  );
}

export default Databases;
