# CPE 1040 - Introduction to Computer Engeneering

## Assignment: Migrating micro:bit Programming from Blocks to JavaScript

### 1. Summary

This assignment asks you to go through a [Intro to CS course with Blocks](https://makecode.microbit.org/courses/csintro) for the micro:bit, and write parallel programs using the JavaScript equivalent of the code in the course modules. This assignment is submitted through Github.

### 2. Requirements

#### 2.1 Section programs

1. The CS course is broken down into thematic sections. There are 5 sections + 1 midterm project + 5 sections + final project. Each section has 4 parts. You want the _Activity_ part, which contains the section's CS material and Blocks.

2. You need to write a _working_ JavaScript (JS) program for the micro:bit for each of these sections/projects, for a total of 12.  

3. For the non-project sections, you are required to use the JS equivalent of the material from the section. _**Note:** For these programs, you are allowed to look at the JS translation of Blocks programs._

4. For the midterm project, you are required to use the JS equivalent of the material from all 5 preceding sections.  _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._ (An aside: if you don't know how to read a statement like "you are not allowed to", the intended and preferred interpretation is "you can do whatever you want and won't be penalized by me, but, if you want to learn most effectively, I suggest that you do not resort to...".)

5. For the final project, you are required to use the JS equivalent of the material from all 10 preceding non-project sections. _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._

#### 2.2 Github commits & tags

1. Working in the Makecode browser environment, you cannot save the JS file of your program in a directory of your choosing. It is stored in an in-browser memory object and is not accessible. (A side note: there might be a Makecode app for Windows which might actually allow that, but there is nothing like that for Mac, to the best of knowledge.) So, you will need to copy the JS from Makecode to another editor (preferably, a code editor with syntax highlighting and code manipulation) and then save and commit it.

2. You need to commit the changes and additions to your assignment for each section or project. This means that there should be _at least_ 12 commits pushed to your remote assignment repository on Github when you are done. I advise you to have more than that, to get used to it.

2. You need to **tag** the final commit for each section. Tags are under _releases_ in the repository bar on the Github page of the assignment repository. The tag should be one of the following `v0.1`, `v0.2`, ..., `v0.12`, for each section, respectively. (Terminology clarification: the `git` command is `git tag`, but tags are counted as _releases_ on Github.)

3. You need to update the assignment repository [README.md](README.md) (this document, in the section [Tags](#tags)) with a short description of your section program or project, **before** you tag. You can do that directly on Github after you push your commits from your local repository.

#### 2.3 Project design

1. For each of the two projects, you need to include a design "document" in the [README.md](README.md) (this document, in the section [Designs](#designs)).

2. The design "document" should follow the _problem-solving tips_ in the [mini-project page](https://makecode.microbit.org/courses/csintro/miniproject).

3. The design "document" should have at least the following sections: Goal, Design process, and JS Language Constructs & Objects. Articulating clearly your engineering work is a key professional skill.

## Resources

### micro:bit 

1. [micro:bit lessons](https://makecode.microbit.org/lessons).

2. [micro:bit ideas](https://microbit.org/ideas/).

3. A list of some more [advanced projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects).

4. The [projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects) at the [awesome micro:bit list](https://github.com/carlosperate/awesome-microbit).

### Github

1. Github Tutorial for Beginners ([webpage](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)).

2. Github Basics for Mac and Windows ([video](https://www.youtube.com/watch?v=0fKg7e37bQE)).

3. git & Github Crash Course for Beginners ([video](https://www.youtube.com/watch?v=SWYqp7iY_Tc)).

4. Introduction to Github for Beginners ([video](https://www.youtube.com/watch?v=fQLK8Ib_SKk)).

5. About `git` ([webpage](https://git-scm.com/about)).

6. `git` [documentation](https://git-scm.com/doc) (webpage, book, videos, reference manual).

7. [Github markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### JavaScript

1. Technically, the language which is used side-by-side with Blocks in the Makecode environment is a subset of [TypeScript](https://makecode.com/language), which itself is a superset of JavaScript (technically, [ECMAScript](https://www.ecma-international.org/ecma-262/10.0/index.html#Title)), with some JS features not implemented in Makecode.

2. The limited [JavaScript mini-tutorial](https://makecode.microbit.org/javascript) in Makecode. Make sure you read it but that can't be your only reference.

3. Official [TypeScript documentation]():
   1. TypeScript in 5 min [tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). _**Highly recommended!** You will need to [download](https://www.typescriptlang.org/index.html#download-links) and install an integrated development envinronment (IDE). The two that I recommend are Visual Studio Code from Microsoft and WebStorm from JetBrains._
   2. The full documentation and reference is under _Handbook_. Bear in mind that you are drinking from the hose. Don't be surprised if not everything is presented in a strictly incremental manner.
   
4. In-browser TypeScript [playground](https://www.typescriptlang.org/play/index.html). Note that micro:bit specific code will not run, but you can still play. _Start making the distinction between a generic multi-purpose programming language (TypeScript) and functionality (packages, libraries, objects, etc.) that is specific to a particular device (micro:bit), though written in the same programming language._

5. A pretty good and very palatable JS tutorial with in-browser coding, by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).

6. Extensive and detailed [JS tutorial](https://javascript.info/), with some advanced material thrown in. _**I like this one!**

7. The most authoritative JS resource on the Web, including tutorials and reference, by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

---

## Tags

### v0.1

** Make Code: Displays a happy face icon, followed by a sad face icon. 
   Link to the JavaScript [file](Activity_One.js)**

### v0.2

 **  Happy Face, Sad Face: A happy face will be displayed when button A is pressed. A sad face will        be displayed when button B is pressed. 
     Link to the JavaScript [file](Activity_Two.js)**

### v0.3

** Score keepper game: This program will kepp score for two players. Press button A to record a win      for player A. Press button B to record a win for player B. Press buttons A+B to record a tie.        Shake the microbit to display scores and the total rounds played.  
   Link to the JavaScript [file](Activity_Three.js)**

### v0.4

** Rock, Paper, Scissors: This program will set you up to play against the microbit. Shake to begin      the game. Then, the program randomly chooses rock, paper, or scissors. Press button A to add a        point to youself. Press button B to add a point to the microbit bot. Press buttons A+B to show the    final scores.
   Link to the JavaScript [file](Activity_Four.js)**

### v0.5

** Loops Demo: To start, a LED light will forever move across the entire display from left to right,    top row to bottom row. When button A is pressed: a sprite will move by 4, turn right 90              degrees, then pause for 100ms. This will repeat 4 times. When button B is pressed, five different    sounds will play in ascending order, this will repeat twice. When buttons A+B are pressed, two        different tones will play separately for 3 times. 
   Link to the JavaScript [file](Activity_Five.js)**

### v0.6

**  Stop Watch: This program acts as a stop watch.
    Link to the JavaScript [file](Midterm_MiniProject.js)**

### v0.7

** Animations and Patterns: On Start, a still face will be plot. Then, the mouth will be toggled to      move up and down 10 times. Lastly, the screen will be cleared and a small heart icon will            appear, with the brightness set to 225. When button A is pressed, a random set of LED light          patterns will display. Press button B to check and display the status of the specific LED. Tilt      Left to adjust the brightness by substracting 25 to the brightness. Tilt right to adjust the          brightness by adding 25 to the brightness. Shake the microbit to clear screen and display the        brightness number. 
   Link to the JavaScript [file](Activity_Seven.js)**

### v0.8

** Double Coin flipper: Acts as a coin being flipped and randomly displays side A or B. Button A        displays the player's scores, and then resets scores to 0. 
   Link to the JavaScript [file](Activity_Eight.js)**

### v0.9

** Binary Transmogrifier: This program converts binary values into decimal. Press button A, to enter    a binary 1. Press button B, to enter a binary 0. Buttons A+B shows the decimal, and resets the        decimal and binary values.
   Link to the JavaScript [file](Activity_Nine.js)**

### v0.10

** Marco Polo: This program connects you with another microbit user to play the Marco Polo game.        Press A to send "Marco". Press B to send "Polo".
   Link to the JavaScript [file](Activity_Ten.js)**
   
** Morse Code: This program connects you to another microbit user to communicate in morse code. Press    Button A to Radio send number 0. Press button B to Radio send number 1. Press button A+B to Radio    send number 2.
   Link to the JavaScript [file](Activity_Ten_B.js)**

### v0.11

** Starry Night: Randomly plotted LEDs will be displayed to represent a starry night (button A). When    button B is pressed, the values of elements of the array will be displayed. 
   Link to the JavaScript [file](Activity_Elevenn.js)**
   
** Headband Charades: This program will act as the famous Ellen Degeneres' game "Heads Up!". On          Screen Up, one of the stored strings will display. On Screen Down, the current value of the index    will be checked, then possibly change the value of index by 1, and indicates the end of game.
   Link to the JavaScript [file](Activity_Eleven_B.js)**

### v0.12

** Compass: This program acts as a compass.
   Link to the JavaScript [file](FinalProject.js)** 


## Designs

### Midterm project

#### Goal

** The goal was to construct a program that would come to benefit myself, while also limited (but not strictly) to using learned information from the previous five activities. In that sense, I chose to create a fully functional stopwatch that when active, starts counting up (while I measure the time of something). This could come in handy when doing school lab experiments, rehearsing time sensitive things, or simply when I need to use a stopwatch. **

#### Design process

**
1.	Brian stormed ideas for a project to make (referenced prior activities)
2.	Chose stopwatch idea
3.	Sketched an outline for the program
4.	Created the program on Visual Studio Code
5.	Asked myself questions along the way. For example:
   a.	Do these code fragments belong here?
   b.	Are my variables declared and initialized?
   c.	Do these code fragments make sense?
6.	Inserted comments into program while making the program, and after finishing it. To organize myself.
7.	After completing the program, double checked for errors such as, syntax, semantics, and other things.
8.	Fixed any errors
9.	Completed and final-saved the final version of the program

**

#### JS Constructs & objects

** 
Variables: startTime || Loops: if…else || Methods: buttonAPressed, buttonBPressed, buttonABPressed || Extras: Tones, Melody, display numbers, icons, math equations, counter
**

### Final project

#### Goal

** The goal was to construct a program that would come to benefit someone in a real-life scenario. In that sense, I chose to create a fully functional compass that when active, respectively pointed East, West, North, and South, in accordance to the individual holding the compass. This could come in handy when hiking, or simply wondering in what direction something is. **

#### Design process

**
1.	Brian stormed ideas for a project to make (referenced prior activities)
2.	Chose Compass idea
3.	Sketched an outline for the program
4.	Created the program on Visual Studio Code
5.	Asked myself questions along the way. For example:
   a.	Do these code fragments belong here?
   b.	Are my variables declared and initialized?
   c.	Do these code fragments make sense?
6.	Inserted comments into program while making the program, and after finishing it. To organize myself.
7.	After completing the program, double checked for errors such as, syntax, semantics, and other things.
8.	Fixed any errors
9.	Completed and final-saved the final version of the program

**

#### JS Constructs & objects

** 
Variables: degrees ||
Loops: While, if…else ||
Methods: buttonAPressed, buttonBPressed ||
Extra: Play tones, plot coordinates, show strings, calibrate compass, pauses, clear screens
**
