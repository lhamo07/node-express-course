import { people } from "../data.js";

const getPeople = (req, res) => {
  res.json({ people });
};
const addPerson = (req, res) => {
  if (req.body.name) {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  } else {
    res.status(400).json({ success: false, message: "Please provide a name" });
  }
};
const getPersonById = (req, res) => {
  const person = people.find((p) => p.id === parseInt(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: "Person not found" });
  }
  res.json({ person });
};
const updatePerson = (req, res) => {
  const id = parseInt(req.params.id);
  const name = req.body.name;
  const person = people.find((p) => p.id === id);
  if (!person) {
    {
      return res
        .status(404)
        .json({ success: false, message: `No person with id ${id}` });
    }
  }
  person.name = name;
  res.status(200).json({ success: true, person });
};
const deletePerson = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedPeople = people.filter((p) => p.id !== id);
  if (updatedPeople.length === people.length) {
    return res
      .status(404)
      .json({ success: false, message: "Person not found" });
  } else {
    res.json({ success: true });
  }
};
export { addPerson, getPeople, getPersonById, updatePerson, deletePerson };
