# ZainzHash
<img src="https://codwithmozain.files.wordpress.com/2022/03/zainzhash.png?resize=438%2C438">
Hashing is the very core of encryption in Computer Science as everybody knows. If you have ever worked with languages such as PHP and SQL, you might know really what a hash is.
You might know hashes like <code>md5</code> and <code>SHA-1</code> which are used to encrypt text like in <b>MD5</b>, a simple message like: <br>
<b>"This is MD5"</b> becomes <code>f6eda1d8b4b2dba89938db14285cf78a</code>
<br>
<p>Just like those, I have created my own hash called <code><b>ZainzHash</b></code>. You can use it in <b>JavaScript</b> and it's <i>younger brothers</i> like <i>node.js</i>. I have also built an API for the same but it hasn't been deployed yet. After it's deployment, you can use it in almost any language like <b>Python</b> etc. </p>

# Versions
<h2 id="version-1">ZainzHashV1 <em>(Deprecated)</em></h2>
<p>The version 1 of the hash called using <code><b>ZainzHashV1</b>()</code> works in a very simple way yet it is very difficult to break the hash. </p>
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

<h2 id="version-3">ZainzHashV3</h2>
<p>The version 3 of the ZainzHash called using <code><b>ZainzHashV3</b>()</code> works in the same way as that of the other versions and comes with the a very high security level and outpasses ZainzHashV1() and ZainzHashV2(). It uses <code>ZainzHashV1</code> and  <code>ZainzHashV2</code> to process it's outcome.</p>

<h3>Method</h3>
<ol>
    <li>Firstly, <code>ZainzHashV1()</code> and <code>ZainzHashV2()</code> are included into the function.</li>
    <li>The input of the function is passed through <code>ZainzHashV2()</code> process and is stored in a variable <code>parse_1</code>.</li>
    <li><code>%zhv3s</code> and <code>$zhv3s_2</code> which act as <i>salts</i> are stored in two variables <code>salt</code> and <code>salt_2</code> respectively.</li>
    <li>An empty string <code>parse_1_string</code> is appended with <code>salt</code></li>
    <li>Every character of the <code>parse_1</code> string is appended into the <code>parse_1_string</code>.</li>
    <li>At last of the <code>parse_1_string</code> is added <code>salt</code>.</li>
    <li>A variable <code>parse_2</code> stores the value of <code>ZainzHashV2(<i>parse_1_string</i></code>.</li>
    <li>An empty string <code>parse_2_string</code> is appended with <code>salt_2</code>.</li>
    <li>Every character of the <code>parse_2</code> string is appended into the <code>parse_2_string</code>.</li>
    <li>At last of the <code>parse_2_string</code> is added <code>salt_2</code>.</li>
    <li>A variable <code>parse_3</code> stores the value of <code>ZainzHashV2(<i>parse_2_string</i>)</code>.</li>
    <li>Finally, a variable <code>parse_4</code> stores the value of <code>ZainzHashV1(<i>parse_3</i>)</code> and is returned.</li>
</ol>

<h3>Advantage and Disadvantage<i>In comparison to previous versions</i></h3>
<h4>Advantage</h4>
<ul>
    <li>The advantage of version 3 is that it has the highest security as compared to previous versions since it has salts and back-to-back hashing.</li>
</ul>
<h4>Disadvantage</h4>
<ul>
    It has a small disadvantage which is that it occupies more space and takes much longer to process than other two. It also has a limit where it stops hashing since the number of characters exceed that of it's capacity.
</ul>

<h3>Usage</h3>
<p>To use this hash in any of your projects, especially <b>node.js</b> projects, this hash may come handy while writing some code for the backend. The syntax of the function is very simple: <code><b>ZainzHashV3</b>(<i>string</i>)</code></p>
<p>For example: <br><code><b>ZainzHashV3</b>(<i>"This is a string"</i>)</code> will return <code>ie</code> and writing: <br> <code><b>ZainzHashV3</b>(<i>1</i>)</code> will first change the numeric 1 to a string i.e "1" and will return <code>il</code> <br> Every input of any type is changed into a string.</p>

<h2 id="version-4">ZainzHashV4</h2>
<p>The version 4 of the ZainzHash called using <code><b>ZainzHashV4</b>()</code> works in the same way as that of the other versions and comes with the a very high security level and outpasses ZainzHashV1() and ZainzHashV2()  and ZainzHashV3(). It uses <code>ZainzHashV3</code> which indirectly require <code>ZainzHashV1</code> and <code>ZainzHashV2</code> to process it's outcome.</p>

<h3>Method</h3>
<ol>
    <li>Firstly, <code>ZainzHashV3()</code> is included into the function.</li>
    <li>Then, the input is made to go through <code>ZainzHashV3</code> encryption.</li>
    <li>Two salts <code>~%zhv4s_1l229__</code> and <code>~&zhv4s_2l230__</code> are stored in variables <code>salt</code> and <code>salt_2</code> respectively.</li>
    <li><code>salt</code> is added at the start and in the end and in between is the encrypted data stored in a string <code>salt_string</code></li>
    <li>The <b>ASCII</b> codes of each character of <code>salt_string</code> is stored in an array <code>salt_array</code></li>
    <li>The sum of the items of <code>salt_array</code> is stored in a variable called <code>salt_sum</code></li>
    <li>A variable <code>salt_difference</code> stores the value of <code>salt_sum - (salt_array[0] + salt_array[length-1]</code></li>
    <li><code>salt_difference</code> and <code>salt_sum</code> is multiplied and stored in <code>product_sd</code></li>
    <li>A variable <code>used_psd</code> holds the sum of <code>salt_sum</code>, <code>salt_difference</code> and <code>product_sd</code></li>
    <li>A variable <code>used_psd16</code> holds the <b>hexadecimal</b> value of <code>used_psd</code></li>
    <li>A string <code>salt_2_string</code> is appended with <code>salt_2</code> at the beginning and the end and in between them are the characters of <code>used_psd16</code> starting from index 0 and each of the characters is followed by <code>salt_2</code></li>
    <li>The ASCII Codes of each of the character of <code>salt_2_string</code> is stored in an array called <code>salt_2_array</code></li>
    <li>A numeric variable <code>final_res</code> is added by the items of <code>salt_2_array</code>. After every 52 additions, the 52nd element of <code>salt_2_array</code> is multiplied to <code>final_res</code>.</li>
    <li>The number so obtained is converted to <code>base 32</code> and is returned.</li>
</ol>

<h3>Advantage and Disadvantage<i>(In comparison to previous versions)</i></h3>
<h4>Advantage</h4>
<ul>
    <li>The advantage of version 4 is that it has the highest security as compared to previous versions since it has salts and version 3 of the hash which indirectly hashes it through <code>ZainzHashV1</code> and <code>ZainzHashV2</code>.</li>
</ul>
<h4>Disadvantage</h4>
<ul>
    It has a small disadvantage same as that of version 3 which is that it occupies more space and takes much longer to process than other two. It also has a limit where it stops hashing since the number of characters exceed that of it's capacity.
</ul>

<h3>Usage</h3>
<p>To use this hash in any of your projects, especially <b>node.js</b> projects, this hash may come handy while writing some code for the backend. The syntax of the function is very simple: <code><b>ZainzHashV4</b>(<i>string</i>)</code></p>
<p>For example: <br><code><b>ZainzHashV4</b>(<i>"This is a string"</i>)</code> will return <code>1fhu27</code> and writing: <br> <code><b>ZainzHashV4</b>(<i>1</i>)</code> will first change the numeric 1 to a string i.e "1" and will return <code>1fftu6</code> <br> Every input of any type is changed into a string.</p>


<h2 id="version-5">ZainzHashV5</h2>
<p>The version 5 of the ZainzHash called using <code><b>ZainzHashV5</b>()</code> differently and comes with the a most advanced security all other versions. It is a primary function i.e it doesn't use any other function to process it's outcome.</p>

<h3>Method</h3>
<ol>
    <li>An array called <code>ascii_array</code> stores the <b>ASCII Codes</b> of each of the characters of the entered data.</li>
    <li>Another array called <code>raw_array</code> stores numbers <b>[1, 2, 3, 4...., n]</b> where <b>n</b> is the length of entered data.</li>
    <li>An array called <code>pro_array</code> is created where each of it's elements have the value of <code>raw_array[i] * ascii_array[length - (i + 1)]</code> or simply product of first and last element of the <code>raw_array</code> and <code>ascii_array</code>, the next element would be the product of second and the second last elements of the above two arrays and so on.</li>
    <li>The number '99' is pushed into the <code>pro_array</code></li>
    <li>A variable called <code>pro_sum</code> stores the sum of the items of <code>pro_array</code></li>
    <li>The average of the <code>pro_array</code> is stored in a variable called <code>pro_avg</code></li>
    <li>A variable <code>pro_median</code> stores the median value of <code>pro_array</code></li>
    <li>The value of <code>pro_sum * (pro_arr[0] + pro_arr[length - 1])</code> is added to <code>pro_sum</code></li>
    <li>The value of <code>pro_sum</code> is multiplied by <code>pro_avg</code> and <code>pro_median</code> independently</li>
    <li>The updated value of <code>pro_sum</code> is increased by <code>pro_avg</code> and <code>pro_median</code> independently</li>
    <li>The new value of <code>pro_sum</code> is multiplied by the sum of <code>pro_avg</code> and <code>pro_median</code></li>
    <li>The final value of <code>pro_sum</code> is converted into a hexadecimal number and stored in a variable called <code>final</code></li>
    <li>A process is made to run through which the number of digits of the return value becomes 32.</li>
    <li>At last, the 32-digit answer is returned to the user.</li>
</ol>


<h3>Advantage and Disadvantage<i>(In comparison to previous versions)</i></h3>
<h4>Advantage</h4>
<ul>
    <li>The advantage of version 5 is that it has the most advanced security as compared to previous versions since it has a lot of arithmetic applied onto data. </li>
    <li>Secondly, it's doesn't use any other function to process it's outcome which makes it totally independent.</li>
</ul>
<h4>Disadvantage</h4>
<ul>
    <li>
    The disadvantage of this version is that any length of data from 0 to any other number, it always returns a 32-bit answer. </li>
    <li>Secondly, it has a limit of hashing till the data length of 262144 or 2^18 or 2.62144 x 10^5 which almost no other version had.</li>
</ul>

<h3>Usage</h3>
<p>To use this hash in any of your projects, especially <b>node.js</b> projects, this hash may come handy while writing some code for the backend. The syntax of the function is very simple: <code><b>ZainzHashV5</b>(<i>string</i>)</code></p>
<p>For example: <br><code><b>ZainzHashV5</b>(<i>"This is a string"</i>)</code> will return <code>0137c1914e1f1611124bea82c5864191</code> and writing: <br> <code><b>ZainzHashV5</b>(<i>1</i>)</code> will first change the numeric 1 to a string i.e "1" and will return <code>0123456789abcdef12345679a13a46b1</code> <br> Every input of any type is changed into a string.</p>
