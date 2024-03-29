import query from "../../data/dbconnect.js";
import generateRandomString from "../util/generateRandomString.js";
const TABLE_NAME = "url";
const url = {
  table: `url`,
  selectOne: async (urlShort) => {
    const sql = `
    SELECT 
      id
      , url_long
    FROM ${TABLE_NAME} 
    WHERE 
      url_short='${urlShort}'
      AND deleted_at is NULL
    ;`;
    return await query(sql);
  },
  selectAll: async (userid) => {
    const sql = `
    SELECT * 
    FROM ${TABLE_NAME} 
    WHERE 
      user='${userid}'
      AND deleted_at is NULL
    ;`;
    return await query(sql);
  },
  insert: async (data, userid) => {
    let urlShort = generateRandomString(6);
    while (url.selectOne(urlShort).length == 0) {
      urlShort = generateRandomString(6);
    }
    const url_long = data.url_long;
    const code = data.code || "NULL";
    const explanation = data.explanation || "NULL";
    const sql = `
    INSERT INTO ${TABLE_NAME}
    (url_short, url_long, code, explanation, user)
    VALUES 
    ('${urlShort}', '${url_long}', ${code}, '${explanation}', '${userid}')
    ;`;
    return await query(sql);
  },
  delete: async (id, userid) => {
    const sql = `
    UPDATE ${TABLE_NAME} 
    SET 
      updated_at = datetime('now') 
      , deleted_at = datetime('now') 
    WHERE 
      id='${id}' 
      AND user='${userid}'
    ;`;
    return await query(sql);
  },
  visit: async (id) => {
    const sql = `
    UPDATE ${TABLE_NAME} 
    SET 
      count = count + 1
      , updated_at = datetime('now') 
    WHERE 
      id=${id}
    ;`;
    return await query(sql);
  },
};
export default url;
