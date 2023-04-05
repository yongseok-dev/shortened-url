import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./data/SQLite.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

export default async function query(sql) {
  try {
    const rows = await new Promise((resolve, reject) => {
      db.all(sql, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
    return rows;
  } catch (error) {
    console.error(error);
  }
}
