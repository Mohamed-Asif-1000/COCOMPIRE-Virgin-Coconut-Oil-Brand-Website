/* Main Content Slideshow Part Begins From Here*/
function sliderFinder(){
    const slideShow= document.querySelectorAll(".hero-section .image-slideshow img");
    let currentSlide = 0;

    if(slideShow.length === 0){
        console.error("No Slides to be Found to present the slideshow");
        return;
    }

    function nextSlideShow(){
        slideShow[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slideShow.length;
        slideShow[currentSlide].classList.add("active");
    }
    slideShow[currentSlide].classList.add("active");

    setInterval(nextSlideShow,3000);
}

/* Contact Box and Message Box Validation Starts From Here*/
function contactForm() {
    const contactForm = document.getElementById("form"); 
    const messageBox = document.getElementById("message-box");
    const closeBtn = document.querySelector(".message-box-container .close-btn");
    const messageText = document.querySelector(".message-box-container p");

    if (!contactForm || !messageBox || !closeBtn || !messageText) {
        console.error("One or more contact form/message box elements are missing. Contact form functionality will be limited.");
        return;
    }

    // Event listener for form submission
    contactForm.addEventListener("submit", function(e) {
        // Prevent the default form submission which would reload the page
        e.preventDefault();
        
        // Display the custom message box
        messageBox.style.display = "flex";
        messageText.textContent = "Thank you! Your message has been sent. We'll get back to you soon.";

        // Reset the form fields after successful submission
        this.reset();
    });

    // Event listener to close the message box
    closeBtn.addEventListener("click", () => {
        messageBox.style.display = "none";
    });

    // Close the message box if the user clicks anywhere outside of it
    window.addEventListener("click", (e) => {
        if (e.target === messageBox) {
            messageBox.style.display = "none";
        }
    });
}

/* FAQ Statements Starts From Here*/
function faqStatement() {
    const statements = document.querySelectorAll(".question");
    
    statements.forEach(statement => {
        statement.addEventListener("click", () => {
            // Get the panel element (the answer) right after the button
            const answer = statement.nextElementSibling;
            
            // Toggle the 'active' class on the question button
            statement.classList.toggle("active");

            // Toggle the answer's max-height to show/hide the content
            if (answer.style.maxHeight) {
                // If the panel is open, set max-height to null to close it
                answer.style.maxHeight = null;
            } else {
                // If the panel is closed, set max-height to its scroll height to open it
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
}
document.addEventListener("DOMContentLoaded",() =>{
    sliderFinder();
    contactForm();
    faqStatement();
});
