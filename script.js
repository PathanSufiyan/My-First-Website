// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {
    
    // Welcome animation
    const heading = document.querySelector("h1");
    heading.style.opacity = "0";
    heading.style.transform = "translateY(-30px)";
    
    setTimeout(() => {
        heading.style.transition = "all 1s ease";
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0)";
    }, 300);

    // Button popup
    const btn = document.createElement("button");
    btn.textContent = "Click Me 🚀";
    btn.style.padding = "10px 20px";
    btn.style.borderRadius = "10px";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.background = "linear-gradient(45deg, #ff0080, #7928ca)";
    btn.style.color = "#fff";
    btn.style.fontSize = "16px";
    btn.style.margin = "20px auto";
    btn.style.display = "block";
    btn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    
    document.body.appendChild(btn);

    // Click Event
    btn.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.textContent = "🎉 Thanks for visiting My Page!";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.background = "white";
        popup.style.padding = "20px 40px";
        popup.style.borderRadius = "15px";
        popup.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
        popup.style.fontSize = "18px";
        popup.style.fontWeight = "bold";
        popup.style.textAlign = "center";
        popup.style.zIndex = "1000";
        
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 2500);
    });
});

