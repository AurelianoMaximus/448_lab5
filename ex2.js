let slideI = 1;
ChangeSlides(slideIndex);

function moveSlide(n)
{
    ChangeSlides(slideI += n);
}

function ChangeSlides(n)
{
    let mySlides = document.getElementsByClassName("mySlides");
    if (n > mySlides.length)
    {
        slideI = 1;
    }

    if (n < 1)
    {
        slideI = mySlides.length;
    }

    else
    {
        for (let i = 0; i < mySlides.length; i++)
        {
            mySlides[i].style.display = "none";
        }
    }



    mySlides[slideI-1].style.display = "block";

}