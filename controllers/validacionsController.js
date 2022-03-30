let controller = {};
let format = require("../format").format;

controller.getvalidacion = (req, res) =>
{
    const sql = "SELECT * FROM validacions INNER JOIN pets ON autos.id = validacions.auto_id INNER JOIN clientes ON clientes.id = validacions.clientes_id  WHERE validacions.id = ?";
	req.getConnection((error,conn) => {
        if(error)
        {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        }
        else
        {
            conn.query(sql, [req.query.id] ,(err, results) =>{
                if(err)
                {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                }
                else
                {
                    format.code = 200;
                    format.message = "Success";
                    format.success = true;
                    format.data = results;
                    res.status(200);
                    res.json(format);
                }
                
            })
        }
		
	});
};

controller.getvalidacionBycliente = (req, res) =>
{
    const sql = "SELECT * FROM validacions INNER JOIN autos ON autos.id = validacions.auto_id INNER JOIN clientes ON clientes.id = validacions.clientes_id WHERE validacions.clientes_id = ?";
	req.getConnection((error,conn) => {
        if(error)
        {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        }
        else
        {
            conn.query(sql, [req.query.cliente_id] ,(err, results) =>{
                if(err)
                {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                }
                else
                {
                    format.code = 200;
                    format.message = "Success";
                    format.success = true;
                    format.data = results;
                    res.status(200);
                    res.json(format);
                }
                
            })
        }
		
	});
};

controller.getvalidacions = (req, res) =>
{
    const sql = "SELECT * FROM validacions INNER JOIN autos ON autos.id = validacions.auto_id INNER JOIN clientes ON clientes.id = validacions.clientes_id";
	req.getConnection((error,conn) => {
        if(error)
        {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        }
        else
        {
            conn.query(sql, [req.query.id] ,(err, results) => {
                if(err)
                {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                }
                else
                {
                    format.code = 200;
                    format.message = "Success";
                    format.success = true;
                    format.data = results;
                    res.status(200);
                    res.json(format);
                }
                
            })
        }
    })
}

controller.postvalidacion = (req, res) =>
{
    const sql = "INSERT INTO validacions SET ?";
    req.getConnection((error,conn) => {
        if(error)
        {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        }
        else
        {
            conn.query(sql, [req.body] ,(err, results) => {
                if(err)
                {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                }
                else
                {
                    format.code = 201;
                    format.message = "validacion add";
                    format.success = true;
                    format.data = results.insertId;
                    res.status(201);
                    res.json(format);
                }
                
            })
        }
    })
}

controller.putvalidacion = (req, res) =>
{
    const sql = "UPDATE validacions SET ? WHERE id = ?";
	req.getConnection((error,conn) => {
        if(error)
        {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        }
        else
        {
            conn.query(sql, [req.body, req.body.id] ,(err, results) => {
                if(err)
                {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                }
                else
                {
                    if(results.affectedRows > 0)
                    {
                        format.code = 200;
                        format.message = "validacion updated";
                        format.success = true;
                        format.data = results;
                        res.status(200);
                        res.json(format);
                    }
                    else
                    {
                        format.code = 404;
                        format.message = "validacion can't be updated, please confirm data";
                        format.success = false;
                        format.data = results;
                        res.status(404);
                        res.json(format);
                    }
                    
                }
            })
        }
    })
}

controller.deletevalidacion = (req, res) =>
{
    const sql = "DELETE from validacions WHERE id = ?";
    req.getConnection((error,conn) => {
        if(error)
        {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        }
        else
        {
            conn.query(sql, [req.body.id] ,(err, results) => {
                if(err)
                {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                }
                else
                {
                    if(results.affectedRows > 0)
                    {
                        format.code = 204;
                        format.message = "validacion deleted";
                        format.success = true;
                        format.data = results;
                        res.status(204);
                        res.json(format);
                    }
                    else
                    {
                        format.code = 404;
                        format.message = "validacion can't be deleted, please confirm data";
                        format.success = false;
                        format.data = results;
                        res.status(404);
                        res.json(format);
                    }
                    
                }
            })
        }
    })
}
module.exports = controller;