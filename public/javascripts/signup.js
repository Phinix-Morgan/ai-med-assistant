
  const addButtonx = document.querySelector("#btnx");

// Function to handle adding item
addButtonx.addEventListener("click", () => {
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();



    const xx=1;
    const zz=2;



     // Save to localStorage (plain text for demo only - NOT secure)
localStorage.setItem('username', username);
localStorage.setItem('password', password);



/*
    // Retrieve items from localStorage
    let itemJsonArray = localStorage.getItem('itemsJson') ? JSON.parse(localStorage.getItem('itemsJson')) : [];

    // Add new item to the array
    itemJsonArray.push({ username,password });


    // Clear input fields
    document.querySelector("#xx1").value = document.querySelector("#xx2").value = "";


    // Update localStorage with the modified array
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

    // Update the table
    updatex(itemJsonArray);


    */


    document.querySelector("#xx1").value = document.querySelector("#xx2").value = "";


// Validate credentials
if (xx=== 1 && zz === 2) {
 // Redirect to dashboard on success
 // Save to localStorage (plain text for demo only - NOT secure)

 alert('registered sucessfully. now nevigate to Login');
 console.log("well done");
 window.location.href = '/home'; // Adjust path
}
else {
 alert('error!!!');
 console.log("error!!!");
}



});


