# ZainzHash
Hashing is the very core of encryption in Computer Science as everybody knows. If you have ever worked with languages such as PHP and SQL, you might know really what a hash is.
You might know hashes like <code>md5</code> and <code>SHA-1</code> which are used to encrypt text like in <b>MD5</b>, a simple message like: <br>
<b>"This is MD5"</b> becomes <code>f6eda1d8b4b2dba89938db14285cf78a</code>
<br>
<p>Just like those, I have created my own hash called <code><b>ZainzHash</b></code>. You can use it in <b>JavaScript</b> and it's <i>younger brothers</i> like <i>node.js</i>. I have also built an API for the same but it hasn't been deployed yet. After it's deployment, you can use it in almost any language like <b>Python</b> etc. </p>

# Versions
<h2 id="version-1">ZainzHashV1</h2>
<p>The version 1 of the hash called using <code><b>ZainzHashV1</b>()</code> works in a very simple way yet it is very difficult to break the hash.
<h3>Method</h3>
<ol>
  <li><b>ASCII Codes</b> of every character are obtained and are stored into an array.</li>
  <li>Each item of the produced array is converted into an <b>Octal Number</b> and is stored in a new array. </li>
  <li>The <b>radix</b> of the <b>Octal Number</b> is changed to 10 or simply to <i>decimal system</i> without changing the face value i.e <b>(176)<sub>8</sub></b> becomes <b>(176)<sub>10</sub></b></li> and all the obtained numbers are stored in an array.
  <li>All the above obtained numbers are added together and stored in a variable. </li>
  <li>The variable obtained above is converted to <code>base 32</code> and returned to the user. </li>
  
</ol>

<h3>Advantage and Disadvantage</h3>
<h4>Advantage</h4>
<ul>
    <li>Huge piece of text even bigger than 15000 words gets reduced to smaller than 10 letters as <code>Hi I am Mohammad Zain and I am currently writing the README.md file of the ZainzHash!</code> changes to <code>a9r</code> which means that 182 letters are hashed and compressed to just 3 characters.</li>
</ul>
<h4>Disadvantage</h4>
<ul>
    <li>The biggest disadvantage of this hash is that 2 or more that 2 letters, sentences etc. can <b>share 1 hash!</b> and this is a very big error in the whole hash. I could have corrected it and I did it but I introduced the Version 2 with this change that no 2 words, letters etc. can have 1 hash. Take the live example of <code>ad</code> and <code>bc</code>, when you see their hashes, you will come up with <b><code>8t</code></b> and this is a very big fault which I have corrected in the upcoming version.</li>
</ul>

<h3>Usage</h3>
<p>To use this hash in any of your projects, especially <b>node.js</b> projects, this hash may come handy while writing some code for the backend. The syntax of the function is very simple: <code><b>ZainzHashV1</b>(<i>string</i>)</code></p>
<p>For example: <br><code><b>ZainzHashV1</b>(<i>"This is a string"</i>)</code> will return <code>21q</code> and writing: <br> <code><b>ZainzHashV1</b>(<i>1</i>)</code> will first change the numeric 1 to a string i.e "1" and will return <code>1t</code> <br> Every input of any type is changed into a string.</p>

<h2 id="version-2">ZainzHashV2</h2>
<p>The version 2 of the hash also works in the same way as that of version 1 and is much difficult to break than version 1. It can be called using <code><b>ZainzHashV2</b>()</code></p>

<h3>Method</h3>
<ol>
    <li>The <b>ASCII Values</b> of characters are stored in an array which we will call <code>code_array[]</code></li>
    <li>The sum of the items of <code>code_array[]</code> are stored in a variable which we will call <code>code_sum</code></li>
    <li>The sum of the first item of <code>code_array</code> i.e <code>code_array[0]</code> and the last item of <code>code_array</code> i.e. <code>code_array[length-1]</code> are stored in a variable which we will call <code>sum_1</code></li>
    <li>The product of the first item of <code>code_array</code> i.e <code>code_array[0]</code> and the last item of <code>code_array</code> i.e. <code>code_array[length-1]</code> are stored in a variable which we will call <code>product_1</code></li>
    <li>The octal values of the items of the <code>code_array</code> are pushed to a new array which we will call <code>octal_array</code></li>
    <li>The decimal form of the octal numbers are taken such that the face values remain same i.e (173)<sub>8</sub> become (173)<sub>10</sub> and are stored in an array which we will call <code>decimal_array</code></li>
    <li>2 numbers <i>viz.</i> 786, 369 are pushed into the <code>decimal_array</code></li>
    <li>The sum of first and last items of the <code>decimal_array</code> is stored in a variable which we will call <code>octal_sum_1</code></li>
    <li>The product of first and last items of the <code>decimal_array</code> is stored in a variable which we will call <code>octal_product_1</code></li>
    <li>A variable called <code>grand_sum</code> is assigned the value of <code>(code_sum * sum_1) + (code_sum + product_1) + (code_sum * octal_sum_1) + (code_sum + octal_product_1)</code></li>
    <li>Finally the <code>grand_sum</code> is converted to <code>base 32</code> and returned.</li>

</ol>

<h3>Advantage and Disadvantage <i>(In Comparison to previous version)</i></h3>
<h4>Advantage</h4>
<ul>
    <li>The most valuable advantage is that the hash has an ultimate security in comparison to previous version of the hash. No two or more words, sentences, characters share a single hash. In the previous version, <code>ad</code> and <code>bc</code> shared a common hash <code>8t</code> while as in this version, <code>ad</code> and <code>bc</code> have different hashes <i>viz.</i> <code>7rmg</code> and <code>7s88</code> respectively.</li>
</ul>
<h4>Disadvantage</h4>
<ul>
    <li>The previous version had one good thing in it that thousands of letters were reduced to few characters as: <code>Hi. My name is Zain, I am 13 years old and I am a software developer and love to code from web development.</code> was reduced to <code>csi</code> but in this version the same thing <code>Hi. My name is Zain, I am 13 years old and I am a software developer and love to code from web development.</code> becomes <code>3r2o16</code>.</li>
</ul>

<h3>Usage</h3>
<p>To use this hash in any of your projects, especially <b>node.js</b> projects, this hash may come handy while writing some code for the backend. The syntax of the function is very simple: <code><b>ZainzHashV2</b>(<i>string</i>)</code></p>
<p>For example: <br><code><b>ZainzHashV2</b>(<i>"This is a string"</i>)</code> will return <code>3vv04</code> and writing: <br> <code><b>ZainzHashV2</b>(<i>1</i>)</code> will first change the numeric 1 to a string i.e "1" and will return <code>1kku</code> <br> Every input of any type is changed into a string.</p>


