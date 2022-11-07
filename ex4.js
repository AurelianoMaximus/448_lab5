function colorChanger(bColor, bckColor)
{
    let borderC = bColor.value;
    let backC = bckColor.value;
    if (borderC == "red" | borderC == "green" | borderC == "blue" && backC == "red" | backC == "green" | backC == "blue")
    {
        document.getElementById("myDiv").style.borderColor = borderC;
        document.getElementById("myDiv").style.backgroundColor = backC;
    }

    else
    {
        alert("invalid color");
    }

}