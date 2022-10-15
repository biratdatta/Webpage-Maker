## Basic Tags

`<html> </html>`
Creates an HTML document

`<head> </head>`
Sets off the title & other info that isn't displayed

`<body> </body>`
Sets off the visible portion of the document

`<title> </title>`
Puts name of the document in the title bar; when
bookmarking pages, this is what is bookmarked

## Body attributes (only used in email newsletters)
`<body bgcolor=?>`
Sets background color, using name or hex value

`<body text=?>`
Sets text color, using name or hex value

`<body link=?>`
Sets color of links, using name or hex value

`<body vlink=?>`
Sets color of visited links, using name or hex value

`<body alink=?>`
Sets color of active links (while mouse-clicking)

## Text Tags

`<pre> </pre>`
Creates preformatted text

`<h1> </h1> --> <h6> </h6>`
Creates headlines -- H1=largest, H6=smallest

`<b> </b>`
Creates bold text (should use <strong> instead)
  
`<i> </i>`
Creates italicized text (should use <em> instead)
  
`<tt> </tt>`
Creates typewriter-style text
  
`<code> </code>`
Used to define source code, usually monospace
  
`<cite> </cite>`
Creates a citation, usually processed in italics
  
`<address> </address>`
Creates address section, usually processed in italics
  
`<em> </em>`
Emphasizes a word (usually processed in italics)
  
`<strong> </strong>`
Emphasizes a word (usually processed in bold)
  
`<font size=?> </font>`
Sets size of font - 1 to 7 (should use CSS instead)
  
`<font color=?> </font>`
Sets font color (should use CSS instead)
  
`<font face=?> </font>`
Defines the font used (should use CSS instead)
  
 ## Media Tag
  
`<video controls><source src="abcd.mp4"></video>`
For adding Video
  
`<audio controls><source Src="abcd.mp3"></audio>`
For adding Audio 
  
## Links
  
`<a href="URL">clickable text</a>`
Creates a hyperlink to a Uniform Resource Locator
  
`<a href="mailto:EMAIL_ADDRESS">clickable text</a>`
Creates a hyperlink to an email address
  
`<a name="NAME">`
Creates a target location within a document
  
`<a href="#NAME">clickable text</a>`
Creates a link to that target location
  
`<iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>`
  Embeds the youtube video in HTML
## Formatting

 `<p> </p>`
Creates a new paragraph
  
`<br>`
AInserts a line break (carriage return)
  
`<blockquote> </blockquote>`
Puts content in a quote - indents text from both sides
  
`<div> </div>`
Used to format block content with CSS
  
`<span> </span>`
Used to format inline content with CSS
  
## Lists
  
`<ul> </ul>`
Creates an unordered list
  
`<ol start=?> </ol>`
Creates an ordered list (start=xx,where xx is a counting number)
  
`<li> </li>`
Encompasses each list item
  
`<dl> </dl>`
Creates a definition list
  
`<dt>`
Precedes each defintion term
  
`<dd>`
Precedes each defintion
  
## Graphical elements

 `<hr>`
Inserts a horizontal rule
  
`<hr size=?>`
Sets size (height) of horizontal rule
  
`<hr width=?>`
Sets width of rule (as a % or absolute pixel length)
  
`<hr noshade>`
Creates a horizontal rule without a shadow
  
`<img src="URL" />`
Adds image; it is a separate file located at the URL
  
`<img src="URL" align=?>`
Aligns image left/right/center/bottom/top/middle (use CSS)
  
`<img src="URL" border=?>`
Sets size of border surrounding image (use CSS)
  
`<img src="URL" height=?>`
Sets height of image, in pixels
  
`<img src="URL" width=?>`
Sets width of image, in pixels
  
`<img src="URL" alt=?>`
Sets the alternate text for browsers that can't process images (required by the ADA)
  
## Forms
`<form> </form>`
Defines a form
  
`<select multiple name=? size=?> </select>`
Creates a scrolling menu. Size sets the number of menu items visible before user needs to scroll.
  
`<select name=?> </select>`
Creates a pulldown menu
  
`<option>`
Sets off each menu item
  
`<textarea name=? cols="x" rows="y"></textarea>`
Creates a text box area. Columns set the width; rows set the height.
  
`<input type="checkbox" name=? value=?>`
Creates a checkbox.
  
`<input type="checkbox" name=? value=? checked>`
Creates a checkbox which is pre-checked.
  
`<input type="radio" name=? value=?>`
Creates a radio button.
  
`<input type="radio" name=? value=? checked>`
Creates a radio button which is pre-checked.
  
`<input type="text" name=? size=?>`
Creates a one-line text area. Size sets length, in characters.
  
`<input type="submit" value=?>`
Creates a submit button. Value sets the text in the submit button.
  
`<input type="image" name=? src=? border=? alt=?>`
Creates a submit button using an image.
  
`<input type="reset">`
Creates a reset button
  
## Tables (use only for data layout - use CSS for page layout) 
  
`<table> </table>`
Creates a table
  
`<tr> </tr>`
Sets off each row in a table
  
`<td> </td>`
Sets off each cell in a row
  
`<th> </th>`
Sets off the table header (a normal cell with bold, centered text)
 
## Table attributes (only use for email newsletters)
  
`<table border=?>`
Sets the width of the border around table cells
  
`<table cellspacing=?>`
Sets amount of space between table cells
  
`<table cellpadding=?>`
Sets amount of space between a cell's border and its contents
  
`<table width=?>`
Sets width of the table in pixels or as a percentage
  
`<tr align=?>`
Sets alignment for cells within the row (left/center/right)
  
`<td align=?>`
Sets alignment for cells (left/center/right)
  
`<tr valign=?>`
Sets vertical alignment for cells within the row (top/middle/bottom)
  
`<td valign=?>`
Sets vertical alignment for cell (top/middle/bottom)
  
`<td rowspan=?>`
Sets number of rows a cell should span (default=1)
  
`<td colspan=?>`
Sets number of columns a cell should span
  
`<td nowrap>`
Prevents lines within a cell from being broken to fit
  
## HTML5 input tag attributes

`<input type="email" name=?>`
Sets a single-line textbox for email addresses
  
`<input type="url" name=?>`
Sets a single-line textbox for URLs
  
`<input type="number" name=?>`
Sets a single-line textbox for a number
  
`<input type="range" name=?>`
Sets a single-line text box for a range of numbers
  
`<input type="date/month/week/time" name=?>`
Sets a single-line text box with a calendar showing the date/month/week/time
  
`<input type="search" name=?>`
Sets a single-line text box for searching
  
`<input type="color" name=?>`
Sets a single-line text box for picking a color
  
## HTML Graphics
  
`<canvas>`
This element is used to draw graphics on a web page and this element is only a container for graphics. You must use JavaScript to actually draw the graphics. Canvas has several methods for drawing paths, boxes, circles, text, and adding images.

`<svg>`  
SVG (Scalable Vector Graphics) defines vector-based graphics in XML format.element is a container for SVG graphics.
SVG has several methods for drawing paths, boxes, circles, text, and graphic images.

## HTML Deprecated Tags

`<acronym>` 
Tells the browser that the characters it contains are an acronym or abbreviation.
Use instead `<abbr> </abbr>`.

`<applet>`	
Defines embedded Java applet.	
Use instead `<object> </object>`.

`<basefont>`	
Specifies the default font size and color of the text. It can be used several times inside the `<head>` or `<body>` tags.

`<big>`	
Increases the font size by one conventional unit.	
Use instead CSS styles.

`<blink>`	
Creates an enclosed text, which flashes slowly.	
Use instead animation.

`<center>`	
Aligns the content to the center.	
Use instead text-align.

`<dir>`	
Defines a list of directory titles.	
Use instead `<ul> </ul>` or list-style.

`<embed>`	
Used as a container for external applications, multimedia and interactive content that the browser doesn’t understand.
Use instead `<object> </object>`.

`<font>`	
Defines the font characteristics.	
Use instead CSS styles.

`<frame>`	
Defines a specific window, a frame, where we can load another web page.	
Use instead `<iframe> </iframe>`

`<frameset>`	
Defines the structure of a frame, number of columns and rows, and how many percent/pixels it will occupy in a frame.	

`<isindex>`	
Displays search strings in the current document.	
Use instead `<form> </form>`

`<noframes>`	
Contains an alternate text to be displayed in browsers that do not support frames.	

`<marquee>`	
Creates a scrolling text or an image.	
Use instead animation or transform.

`<menu>`	
Defines where to open the link.	
Use instead `<ul> </ul>`.

`<plaintext>`	
Tells the browser, that its content must be displayed as an ordinary text without formatting.	
Use instead `<pre> </pre>`.

`<s>`	
Defines a text, which is not relevant anymore.	
Use instead text-decoration.

`<strike>`	
Defines the strikethrough text.	
Use instead `<del>` or CSS styles.

`<tt>`	
Defines text to be displayed in monospace or fixed-width font as it would appear on a teletype or typewriter.	
Use instead font-family, `<kbd>`, `<code>` or `<spam>`.

`<u>`	
In HTML 4.01 specifies an underlined text. In HTML 5, specifies text that is stylistically different from normal text.	
Use instead text-decoration.

## HTML Mathematical Symbols

`&#8704` 
Displays the symbol `∀` (For all)

`&#8706`
Displays the symbol `∂` (Partial Differentiation)

`&#8707`
Displays the symbol `∃` (There exists)

`&#8709`
Displays the symbol `∅` (Empty/Null set)

`&#8712`
Displays the symbol `∈` (Element of)

`&#8713`
Displays the symbol `∉` (Not element of)

`&#8721`
Displays the symbol `∑` (Summation)
  
## Some other HTML Symbols

`&#169`
Displays the symbol `©` (Copyright sign)

`&#174`
Displays the symbol `®` (Registered sign)

`&#8364`
Displays the symbol `€` (Euro sign)

`&#8482`
Displays the symbol `™` (Trademark sign)

`&#8592`
Displays the symbol `←` (Leftwards arrow)

`&#8593`
Displays the symbol `↑` (Uppwards arrow)

`&#8594`
Displays the symbol `→` (Rightwards arrow)

`&#8595`
Displays the symbol `↓` (Downwards arrow)

`&#9824`
Displays the symbol `♠` (Black spade sign)

`&#9827`
Displays the symbol `♣` (Black club sign)

`&#9829`
Displays the symbol `♥` (Black heart sign)

`&#9830`
Displays the symbol `♦` (Black diamond sign)

