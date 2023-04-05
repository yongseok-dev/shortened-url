import query from "../../data/dbconnect.js";
export default async function reset() {
  const DROP_TABLE = {
    url: `DROP TABLE url;`,
    user: `DROP TABLE user;`,
    visits: `DROP TABLE visits;`,
  };
  await query(DROP_TABLE.url);
  await query(DROP_TABLE.user);
  await query(DROP_TABLE.visits);

  const CREATE_TABLE = {
    url: `CREATE TABLE url (id INTEGER PRIMARY KEY AUTOINCREMENT,url_short TEXT NOT NULL,url_long TEXT NOT NULL,count INTEGER NOT NULL DEFAULT 0,code TEXT NULL DEFAULT NULL,explanation INTEGER NULL DEFAULT NULL,user TEXT NOT NULL,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,deleted_at TIMESTAMP NULL,updated_at TIMESTAMP NULL);`,
    user: `CREATE TABLE user (id INTEGER PRIMARY KEY,name TEXT,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,deleted_at TIMESTAMP NULL,updated_at TIMESTAMP NULL);`,
    visits: `CREATE TABLE visits (id INTEGER PRIMARY KEY AUTOINCREMENT,url_short TEXT NOT NULL,ip_address TEXT NOT NULL,prev TEXT NOT NULL,visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`,
  };
  await query(CREATE_TABLE.url);
  await query(CREATE_TABLE.user);
  await query(CREATE_TABLE.visits);

  const result = await query("SELECT * FROM sqlite_master");
  console.log("DB 초기화");
}
