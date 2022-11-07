function checkPassword(pw1, pw2)
{
    if(pw1.value != "" && pw2.value != "" && pw1.value.length >= 8 && pw1.value == pw2.value)
    {
        alert("The password you have entered is valid!");
        return true;
    }

    else
    {
        alert("The password you have entered is not valid!");
        return false;
    }
}