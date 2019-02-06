/****************************************************
********************* IMPORTS ***********************
*****************************************************/
const keys = require('./keys');

/****************************************************
******************** LIBRARIES **********************
*****************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

/****************************************************
******************** VARIABLES **********************
*****************************************************/
const port = process.env.PORT || 5000
const app = express();
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

/****************************************************
********************** CONFIG ***********************
*****************************************************/
app.use(cors());
app.use(bodyParser.json());

pgClient.on('error', () => console.log('Lost PG Connection'));
pgClient.query('CREATE TABLE IF NOT EXISTS entries (id text PRIMARY KEY, compound text, quantity integer, timestamp integer, uid text)')
        .catch(error => console.log(error));

/****************************************************
**************** ROUTES HANDLERS ********************
*****************************************************/

app.get('/entries/:uid', async(req, res)=>{
    const uid = req.params.uid;
    const query = `SELECT * FROM entries WHERE uid = $1`;
    const values = [uid];
    try{
        const entries = await pgClient.query(query, values);
        res.send(entries.rows);
    }catch(error){
        res.status(400).send(error);
    }
});

app.post('/entries', async(req, res)=>{
    const {id, compound, quantity, timestamp, uid} = req.body;
    const query = `INSERT INTO 
                        entries(id, compound, quantity, timestamp, uid) 
                    VALUES ($1, $2, $3, $4, $5)`;
    const values = [id, compound, quantity, timestamp, uid]

    try{
        const entry = await pgClient.query(query, values);
        res.send(entry.rows);
    }catch (error){
        res.status(400).send(error);
    }
});

app.patch('/entries', async(req, res)=>{
    const body = req.body;
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

    try {
        const entry = await pgClient.query(query, values);
        res.send(entry.rows);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/entries', async (req, res)=>{
    const {id} = req.body;
    const query = "DELETE FROM entries WHERE id=$1"
    const values = [id];

    try {
        const del = await pgClient.query(query, values);
        res.send(del.rows);
    } catch (error) {
        res.status(400).send(error);
    }
});


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});