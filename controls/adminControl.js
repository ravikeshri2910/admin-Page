const AdminData = require('../models/adminDataFormat');

exports.postAdminData = async(req,res)=>{
    try{
        
        const name = req.body.name;
        const price = req.body.price;
        const category = req.body.category;

        let data = await AdminData.create({
            name : name,
            price : price,
            category : category
        })

        res.status(201).json({ userdetails : data})

    }catch(err){console.log(err)}
}

exports.getAdminData = async(req, res) =>{
    try{
        let data = await AdminData.findAll()
        res.status(201).json({ userdetails: data })

    }catch(err){console.log(err)}
}


exports.deleteAdminData = async (req, res)=>{
    try{
        let deleteId = req.params.id;
        console.log(deleteId)
       await AdminData.destroy({where : {id :(+deleteId)}})
        res.redirect('/user/get-data')
    }catch(err){console.log(err)}
}

exports.getEditData = async (req,res)=>{
    try{
        let dataId = req.params.id;
        // let data = await ExpenseData.findById((+dataId))
        let data = await AdminData.findAll({where : {id : (+dataId)}})
        res.status(201).json({userdetails:data})

    }catch(err){console.log(err)}
}

exports.updatedData = async(req,res)=>{

    let dataId = req.body.id;
    let updatedName = req.body.updatedName;
    let updatedPrice = req.body.updatedPrice;
    

    console.log(updatedPrice)


    let updatedData  = await AdminData.findAll({where : { id : (+dataId)}})
    
    console.log(updatedData[0].id)

   
    updatedData[0].name = updatedName,
    updatedData[0].price = updatedPrice,
    
    
    await updatedData[0].save()

    res.redirect('/user/get-data')

}

