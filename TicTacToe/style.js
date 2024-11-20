document.addEventListener("DOMContentLoaded", function() {

    const style = document.createElement('style');
    style.innerHTML = `
        body {
            font-family: Arial, sans-serif;
            // display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #38595c1a;
        }

        h1{
            color: #000;
            text-align:center;
            font-size : 4em;
        }

        #gameBoard {
            border-collapse: collapse;
            margin: auto auto;
            background-color: #E1F0DA;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        #gameBoard td {
            border: 2px solid #333;
            width: 150px;
            height: 150px;
            text-align: center;
            vertical-align: middle;
        }

        .btn {
            width: 100%;
            height: 100%;
            font-size: 2em;
            cursor: pointer;
            background: none;
            border: none;
            outline: none;
            transition: background-color 0.3s;
        }

       :clicked{
            background-color : red;
       }

        .btn:disabled {
            cursor: not-allowed;
        }
    `;
    document.head.appendChild(style);

   

});
