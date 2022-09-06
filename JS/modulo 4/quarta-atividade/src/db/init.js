const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()

    try {
      await db.exec(`CREATE TABLE setores (
        id INTEGER PRIMARY KEY, 
        name TEXT
      )`)

      await db.exec(`CREATE TABLE  funcionario(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,       
        setor INT
      )`)
      console.log(`DB criado com sucesso`)
    } catch (erro) {
      console.error(`Não foi possível criar o DB ${erro}`)
    }
    await db.close()
  }
}

initDb.init()
