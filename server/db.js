const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

module.exports = db;

db.serialize(() => {
  // Créer la table users si elle n'existe pas
  db.run("CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)");

  // Insérer des utilisateurs par défaut
  const stmt = db.prepare("INSERT INTO users (id, name) VALUES (?, ?)");

  stmt.run(1, 'Jean Dupont');
  stmt.run(2, 'Marie Durand');
  stmt.run(3, 'Paul Martin');
  // ... ajoutez autant d'utilisateurs que vous le souhaitez

  stmt.finalize();
});
