var express = require('express');
var router = express.Router();
var fs = require('fs');






/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login', function(req, res, next) {
  console.log('로긴ejs파일을 넘겨준다')
  res.render('login',{title: 'Login Page'});

  
});


router.post('/login', function(req, res, next) {
 
console.log('입력한 아이디:',req.body.ID);
console.log('입력한 비밀번호:',req.body.PW);

var data="id: " +req.body.ID+" \n pw: "+req.body.PW+ "\n----------------------\n";
console.log(data);
fs.appendFile('aaa.txt', data, 'utf8', function(error, data)
{
if(error){throw error};
console.log('성공');
});

res.send('님의 정보는 내 개인정보 컬렉션에 추가됨ㅎㅎ');
 /* if(req.body.ID=='cat'){

  
  if(req.body.PW=='joa'){
    res.send('Login 성공!');
  }
  else{
  res.send('Login 실패: PW오류');
  }
}
else{
  res.send('Login 실패: ID오류');
}
  */
});


module.exports = router;
