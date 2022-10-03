// This is a new Repository or cheatsheat for HTML that I wanted to share with everyone. It is going to be updated daily
## Headings
Code:
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
```
Preview:
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<br>

## Adding images or link
```html
[link-name](link-site)
![img-name](img-file-or-link)
```
Preview:<br>
[Google](google.com)<br>
![Google](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png)

## Text styles
```html
**bold**
_italic_
~~strikethrough~~
```
**Bold**
_Italic_
~~strikethrough~~

## Creating a form in html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">

    <title>Beauty Peagent Form</title>
    <style>
        body {
            background-color: rgb(221, 214, 201);
            width: max-content;
        }
        
        h1 {
            text-align: center;
            text-decoration: underline;
            color: black;
        }
        
        h2 {
            color: rgb(41, 5, 5);
        }
        
        p {
            color: black;
            font-weight: bolder;
        }
        
        p1 {
            color: rgb(54, 43, 43);
        }
        
        p2 {
            text-align: center;
        }
        
        h3 {
            color: black;
        }
        
        submit::after
    </style>
</head>

<body>
    <form>
        <h1> Most Desirable Man and Woman 2k21</h1>
        <h2><i> Ur on your way to becoming most desirable man/woman of entire K.J.Somaiya!</i></h2>
        <p1><i>Brace yourselves, hype up as we are having nothing less than a <b>Beauty Peagent!</b></i></p1><br>
        <p> <br> Name : <input type="text" name="name" required> <br> <br>
            <p2>
                Gender</p2>
            <br> Male
            <input type="radio" name="gender" id="Male" required> Female
            <input type="radio" name="gender" id="Female" required> <br> <br> Date of birth : <input type="date" name="Date of birth" required> <br><br> <br> E-mail : <input type="email" Email="Email" required> <br> <br> Contact Number : <input type="number"
                name="Contact Number" required> <br><br>
            <p3>College Name</p3>
            <select>
            <option value="Select your college">Select your college</option>
            <option value="K.J.Somaiya College of Engineering">K.J.Somaiya College of Engineering</option>
            <option value="K.J.Somaiya Institute of Engineering and Information technology">K.J.Somaiya Institute of Engineering and Information technology</option>
            <option value="K.J.Somaiya Institute of Management">K.J.Somaiya Institute of Management</option>
            <option value="K.J.Somaiya College of Science and Commerce">K.J.Somaiya College of Science and Commerce</option>
            <option value="K.J.Somaiya College of Nursing">K.J.Somaiya College of Nursing</option>
            <option value="K.J.Somaiya Polytechnic Institute">K.J.Somaiya Polytechnic Institute</option>
            <option value="K.J.Somaiya College of Dharma Studies">K.J.Somaiya College of Dharma Studies</option>
            <option value="K.J.Somaiya College of Medical Studies">K.J.Somaiya College of Medical Studies</option>

</select>
            <br><br>
            <p3>Year of Study</p3>
            <select>
    <option value="Select your year of study">Select your year of study</option>
    <option value="FYJC">FYJC</option>
    <option value="SYJC">SYJC</option>
    <option value="FY">FY</option>
    <option value="SY">SY</option>
    <option value="TY">TY</option>
    <option value="LY">LY</option>
   </select>

            <br> <br> Describe yourself&nbsp;!<br>
            <input type="text" required> <br> <br><br> Upload your best picture&nbsp;!
            <input type="file" required> <br> <br>
            <h3>Rate yourself according to:-</h3>
            <p> Beauty</p>
            <input type="range" <br>
            <p> Confidence</p>
            <input type="range" <br>
            <p> Intelligence</p>
            <input type="range" <br>
            <p> Enthusiasm</p>
            <input type="range" <br>

            <h3> Some noteworthy activities you have done:-&nbsp;</h3>
            <p>(sports,cultural,academics)</p>
            <input type="text" required><br><br>
            <h3>Why you want to become most desirable man/woman K.J.Somaiya?</h3>
            <input type="text"> <br> <br>
            <p1>For the selection process, we have four rounds namely this application, a talent hunt, group discussion and viva/interview. </p1>
            <p>According to you, which among them is your strength and why? <br><br>
                <input type="text"> <br> <br><br><br>

            </p>
            <input type="submit" name="Submit"> &nbsp; 
            <input type="reset" name="Reset">
 </p>

    </form>
</body>

</html>
```
Preview:
![image](https://user-images.githubusercontent.com/98261167/193593315-b53986eb-7b6e-454c-9640-82d4848fd458.png)
