body{
    margin:0;
    font-family:Arial,sans-serif;
    background:linear-gradient(135deg,#ff758c,#ff7eb3);
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

.container{
    background:white;
    padding:30px;
    border-radius:20px;
    text-align:center;
    width:350px;
    box-shadow:0 0 20px rgba(0,0,0,0.2);
}

input{
    width:90%;
    padding:12px;
    margin:10px 0;
    border-radius:10px;
    border:1px solid #ccc;
}

button{
    padding:12px 25px;
    border:none;
    border-radius:10px;
    background:#ff3366;
    color:white;
    cursor:pointer;
    font-size:16px;
}

button:hover{
    transform:scale(1.05);
}

.heart{
    font-size:80px;
    animation:beat 1s infinite;
}

@keyframes beat{
    0%{transform:scale(1);}
    50%{transform:scale(1.3);}
    100%{transform:scale(1);}
}

#result{
    margin-top:20px;
    font-size:22px;
    font-weight:bold;
}
