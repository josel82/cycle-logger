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
const uuid = require('uuid/v4');

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
pgClient.query('CREATE TABLE IF NOT EXISTS entries (id text PRIMARY KEY, compound text, quantity decimal, timestamp bigint, uid text)')
        .catch(error => console.log(error));

/****************************************************
**************** ROUTES HANDLERS ********************
*****************************************************/

app.get('/users/:uid/entries', async(req, res)=>{
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

app.post('/users/:uid/entries', async(req, res)=>{
    const { compound, quantity, timestamp } = req.body;
    const { uid } = req.params;
    const id = uuid();
    
    const query = `INSERT INTO 
                        entries(id, compound, quantity, timestamp, uid) 
                    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [id, compound, quantity, timestamp, uid]

    try{
        const entry = await pgClient.query(query, values);
        res.send(entry.rows);
    }catch (error){
        res.status(400).send(error);
    }
});

app.patch('/users/:uid/entries/:id', async(req, res)=>{
    const { id } = req.params;
    const body = req.body;
    let query = "UPDATE entries SET";
    let count = 1;
    const values = [id]
    for (let key in body) {
        count++;
        query += ` ${key}=$${count},`;
        values.push(body[key]);
    }
    query = query.substring(0, query.length - 1); //Removes last coma
    query += " WHERE id=$1 RETURNING *";

    try {
        const entry = await pgClient.query(query, values);
        res.send(entry.rows);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/users/:uid/entries/:id', async (req, res)=>{
    const { uid, id } = req.params;
    const query = "DELETE FROM entries WHERE uid=$1 AND id=$2 RETURNING *"
    const values = [uid, id];

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