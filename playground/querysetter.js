const body = {
    id: 'dsf32e3dddcAad3e23edwdf',
    compound: 'Some weird compound',
    timestamp: 431245234
};
let query = "UPDATE entries SET";
let param = 1;
const values = [body.id]
for (let key in body) {
    if (key !== 'id') {
        param++;
        query += ` ${key}=$${param},`;
        values.push(body[key]);
    }
}
query = query.substring(0, query.length - 1); //Removes last coma
query += " WHERE id=$1";

