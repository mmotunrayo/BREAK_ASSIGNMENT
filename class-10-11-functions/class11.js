function validateName(name){
    if(!name){
        return{
            valid:false,
            error:"name is required"
        };
    }return{
        valid:true,
        error:null
    }
}
console.log(validateName(" "));