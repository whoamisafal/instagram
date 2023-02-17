var mail=require('nodemailer')
var smtpTransport=mail.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
        user:'testinstagram530@gmail.com',
        pass:'xmcydccskwucqaom'
    }
})
exports.sendMail=function(email,subject,message){
    return new Promise(function(resolve,reject){
        var mailOptions={
            from:'"Vibe-Nep"<testinstagram530@gmail.com>',
            to:email,
            subject:subject,
            html:message,
        }
        smtpTransport.sendMail(mailOptions,function(err,result){
            console.log(err);
            if(err){
                reject(false)

            }else{
                resolve(result)
            }
        })
    }).catch(err=>{
       
        return false
    }).then(res=>res)
}