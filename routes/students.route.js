import express from "express";
import faker from "faker";
export const router = express.Router();

router.get("/", (req, res) => {
    const students = [
        {
            id: faker.datatype.uuid(),
            name: faker.name.firstName(),
            cursus: faker.name.jobType(),
            average:faker.datatype.number({min:10,max:20})
        }
    ]
    res.status(200).json({message:"Get all acces ",students })
});



const fmultiplyArray = (param) => {
    let array = []
        const students = [
            {
                id: faker.datatype.uuid(),
                name: faker.name.firstName(),
                cursus: faker.name.jobType(),
                average:faker.datatype.number({min:10,max:20})
            } 
        ]
for (let index = 0; index < param; index++) {
    array.push(students)
    } 
    return array
}

console.log(fmultiplyArray(3));


router.get("/:id", (req, res) => {

    const studentId = req.params.id
    res.send(`Get id student ${studentId}`)
});
router.post('/', function (req, res) {
    console.log(req.body);
    const { id, name, location } = req.body
  const clef =   Object.keys(req.body).map(key => console.log(key, req.body[key]))
    const rty = Object.values(req.body).filter(value => value.length <= 4)
   
  console.log(rty);
    res.send(rty + clef);
  });

router.put('/:id', function (req, res) {
    const { name} = req.body
    console.log( name);
    res.send(`hello ${name}`);
  });


router.delete('/:id', function (req, res) {
    const { id } = req.body
    res.send(`delete ${id}`);
});

  

