const  Pool  = require("../dataBase/dbCon")

try {
    exports.create=async function(req,respond){
        Pool.query(
            "SELECT * FROM chat_app.registered_users WHERE email=$1",[req.body.email],
            (err,res)=>{
                if(err){
                    throw err;
                }else{
                    if(res.rows[0]!=null){
                        return respond.send({error:true,message:"user already registered"})
                    }else{
                        Pool.query("INSERT INTO chat_app.registered_users(user_name, email, password) VALUES ($1, $2, $3)",[req.body.username,req.body.email,req.body.password],
                        (err,res)=>{
                            if(err){
                                throw err
                            }else{
                                return respond.send({error:false,message:"user registered successfully"})
                            }
                        }
                        )
                    }
                }
            }  
        )
    }
    
} catch (error) {
    console.log(error)
}

