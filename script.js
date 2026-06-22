function checkPassword(){
    const password=document.getElementById("password").value;
    const result=document.getElementById("result");
    if(password==="end16"){
        result.innerHTML=`
        <h2>ACCESS GRANTED</h2>

        <p>
        
        MISSION COMPLETE
        
        </p>

        <p>

        脱出おめでとうございます。
        この画面を入口の運営に見せてください

        </p>

        `;

    }

    else{
        result.innerHTML=`

        <h2>

        ACCESS DENIED

        </h2>

        <p>

        パスワードが違います

        </p>
        `;
    }

}
