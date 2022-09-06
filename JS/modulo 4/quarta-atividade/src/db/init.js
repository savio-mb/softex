const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()

    await db.exec(`CREATE TABLE setores (
      id INTEGER PRIMARY KEY, 
      name TEXT
    )`)

    await db.exec(`CREATE TABLE  funcionario(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,       
      setor INT
    )`)

    await db.close()
  }
}

initDb.init()
