import styled from "styled-components";

export const FormContainer = styled.form
`
width:100%;
background-color:white;
color:black;
padding:25px;
display:flex;
justify-content:space-around;
align-items:center;
flex-direction:column;
border-radius:10px;
box-shadow: 0px 8px 2px rgba(32, 32, 32, 0.2);
label{
    text-align:center;
    font-size:10px;
    margin-top:10px;
    span{
        color:hsl(0, 100%, 74%);
        font-weight:700;
    }
}
`

export const Input = styled.input`
border:1px solid hsl(246, 25%, 77%); 
width:100%;
margin-top:15px;
padding:18px 15px;
border-radius:5px;
font-weight:500;
`
export const ButtonSubmit = styled.button`
width:100%;
background-color:hsl(154, 59%, 51%);
color:white;
border:none;
border-radius:5px;
padding:20px 20px;
font-weight:700;
font-size:80%;
margin-top:20px;
&:hover{
    background-color:hsl(154, 63%, 46%);
    cursor:pointer;
}
`
export const ButtonTry = styled.button`
width:100%;
background-color: hsl(248, 32%, 49%) ;
color:white;
border:none;
border-radius:5px;
padding:20px 20px;
font-weight:700;
font-size:80%;
margin-bottom:25px;
box-shadow: 0px 5px 2px rgba(32, 32, 32, 0.3);
&:hover{
    background-color:hsl(248, 32%, 40%);
    cursor:pointer;
}
`
export const Container = styled.div`
grid:6fr;
`

export const InvalidTag = styled.p`
color:red;
font-style:italic;
text-align:right;
font-size:10px;
font-weight:bold;
margin:0;
padding:0;
margin-left:auto;
margin-top:5px;
display:none;
`