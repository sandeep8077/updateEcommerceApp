const bcrypt = require('bcrypt');

const hashPassword = async (planePassword)=>{
    try {
        const salt = 10;
        const hashedPassword = await bcrypt.hash(planePassword,salt);
        return hashPassword
    } catch (error) {
        console.log('errror to password hashed!!');
        
    }

}

const comparePassword = async(planePassword,hashedPassword)=>{
    try {
        const istrue = await bcrypt.compare(planePassword,hashPassword);
        return istrue;
        
    } catch (error) {
        console.log('error to compare password');
        
    }
   
    
}

module.exports = {hashPassword,comparePassword};