import express from "express"
import cors from "cors"

const app = express();
app.use(express.json);
app.use(cors());

const todos = [
  { description: "Estudar Engenharia de Software", done: true},
  { description: "Pagar contas", done: false},
  { description: "Estudar Engenharia de Software", done: false}
]

app.get('/todos', (req, res) => {
  return res.json(todos);
})

app.listen(3000);