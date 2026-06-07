CLASS 01
THE 2026 WEB ECOSYSTEM.(THEORY)
1.	Understanding how the browser renders simply matters because it helps me as a developer see beyond the code, it helps me builds faster and can even aid debugging since I know what is what.  If I know how the browser turns HTML into pixels on the screen, then I should be able to create websites that are faster, smoother, and easier to maintain.
2.	Quick UDP internet connection known as QUIC is a modern network protocol and its preferred for modern days applications because the connection setup is faster compared to the traditional setup(TCP) and also has a built in security. 
It’s more reliable than TCP which is why HTTP/3 is built on QUIC rather than TCP.
3.	Facebook and youtube because It doesn’t allow me use keyboard shortcuts and also in the process of using inspecting tools,I noticed there are many divs instead of using semantic tags.

PRODUCT THNKING

1.	Semantic html acts as a clear road map for codes/websites and it aids in having a clear structuring and building. Using those tags given to buttress my point,it helps search engine to structure in a very balanced heirachical order. For instance, if I have article ,its explains that the whole code in it is complete and can stand on its own,likewise its reusable. Header as another example and its technically explaining the introductory aspect of the code.
2.	For a multiplayer game,the most important benefit is for data to travel fast. I.e having low latency and perhaps ,reduction of network congestion.

ENGINEERING BEST PRACTICES
1.	I disagree with the idea of using only divs everywhere, even if the website seems to work fine. Semantic HTML elements such as header, nav, main, section, and footer give meaning to the content on a page. This is important for accessibility because screen readers rely on these elements to help users with disabilities understand and navigate the website more easily.
Semantic HTML also helps with SEO. Search engines can better understand the structure and content of a page when semantic tags are used correctly, which can improve search rankings. In addition, semantic HTML makes collaboration easier among developers. When another developer looks at the code, they can quickly understand the purpose of different parts of the page without reading many class names or comments. A page built with only divs may work, but it is harder to maintain and understand in the long run. Therefore, semantic HTML is a better practice for building modern websites.

CLASS 02
TYPOGRAPHY AND INFORMATION HIERACHY(THEORY)
1.	The basic difference between <i> and <em> tags is that the first tags is just to change the styling of a particular text while the latter is for emphasis. Example is <em>I</em> didn't steal your keys. This means someone else stole them not me  and 
 I didn't steal <em>your</em> keys,this means I stole someone else's keys, just not yours.
2.	We have the header,the footer and article.
3. I dont actually know what ARIA label is ,but will research on it.

ACCESSIBILITY REFLECTION
1. I navigate through the NYSC portal, I use the Tab key to move through the page, but the movement is not that smooth.Some parts like menus, login links, and service options are reachable,form fields (like email and password) usually have labels or placeholders, but some rely more on placeholder text, which can be unclear when typing.
Buttons such as “Login” or “Continue” can be reached with Tab, but the fhighlight is weak.
Overall, the site works with keyboard navigation, but it is not fully smooth or very user-friendly for accessibility users.

PRODUCT THINKING
1. I have no idea

CLASS 03
MODERN ASSETS AND LINKING(THEORY)
1. First, I will check the image and reduce its size so it wont be bigger than what people will actually see on the screen. Then I will change it from PNG to lighter formats like WebP or AVIF so it loads faster.
After that, I will compress it to remove extra hidden data that makes it heavy. I will also make different sizes so phones and computers don’t download the same big file.
Finally, I will upload it to a fast server (CDN) and make sure the hero image loads quickly when the page opens.
2. srcset is a way to give the browser different sizes of the same image, so it can pick the best one for each screen.
Instead of forcing everyone to download one big image, the phone can get a small one, and a desktop can get a bigger one.
for instance, A hero image is 2000px wide. Without srcset, a mobile user still downloads the full 2000px image → slow loading and wasted data. With srcset, the phone gets a smaller 600px version → faster load and less data use.
So it basically helps websites load faster by giving each device the right-sized image.
3. When you use `target="_blank"`, the new page can secretly control or mess with your original page.
`rel="noopener"` stops that new page from “taking over” or redirecting your tab to something unsafe (called tab-nabbing).
So it keeps your page safe while still opening links in a new tab.

ENGINEERING THINKING
1. I’d make sure the page doesn’t try to load everything at once.
First, I’d use lazy loading so images only load when the user scrolls to them, not all 50 at page load. Then I’d convert images to WebP/AVIF to make them smaller and faster to download.
Next, I’d serve them through a CDN so they load quickly from a nearby server. Finally, I’d use responsive image sizes like srcset so phones get small images while desktops get larger ones.This way, the page stays fast, saves data, and doesn’t hang on mobile.

CLASS 04
MODERN FORMS AND USER EXPERIENCE(THEORY)
1.	when a user submits an invalid email, the user experience flow should focuses on instant correction and I think a good application form must use both the client side and server side model because the client side is for the usability and encountering errors might brings about frustration without forcing them to wait for any command from the server side. While the server side is mainly for security and both methods to me should actually be combined.
2.	Autocomplete attributes tells the browser whether it can complete a previous input the user has typed in before and it could be used in completing emails,name,password,phone numbers and likes. 

PRODUCT THNKING.

1.	To me, I believe the app should be built to the extent of it storing data even if the bandwidth network is low. It should be client-side resilience. Although I don’t know those steps I will take to have that kind of results. But will surely make my research on it.
2.	The native selector can be used when you are dealing with datas that requires no explanation and the custom drop down can be used when you are dealing with a long list . like you are trying to choose a country out of a long list, so the drop down allows for typing so as to be easy to choose from the list.

ENGINEERING BEST PRACTICES
1.	In describing a password inputs with these attributes:I have a password group with some attributes like the input bar, the strength of the password from strong to weak, the minimum and maximum inputs to be added, the check for lowercase using javacsript  and check for others too.


CLASS 05
THE CSS ENGINE- BOX MODEL AND SPECIFICITY(THEORY)
 
1.	To be done on paper
2.	Its describes which rules win when multiple rules target an elements and based on the exercise given, we have; .header nav ,ul ,il , and a. this has a class selector (.header) and then the 4 elements so specifity is (0,1,4) and for nav , a.active,specifity is (0,1,2) while for .nav-links a,specifity is (0,1,1).
3.	The CSS cascade is the rule system the browser uses to decide which style applies when multiple rules target the same element. It works based on specificity, source order, and importance. If two rules have equal specificity, the one written later in the code wins. It helps you avoid writing repeated CSS by allowing general styles to apply first and only overriding them when necessary.

ENGINEERING THINKING
1.	When you add padding: 10px to an element, the browser increases the element’s size because of the default box model behavior. By default, CSS uses box-sizing: content-box, which means padding and border are added outside the set width and height. So if you set width: 200px, the actual rendered size becomes 200px + padding (and border), making it look wider than expected. This is why your layout may break or overflow. The fix is to use box-sizing: border-box, which includes padding and border inside the declared width. With this, the element stays exactly 200px even after adding padding, keeping your layout stable.
2.	Content box pushes padding and borders outward, making the element physically wider than its defined width.
	border-box keeps padding and borders inside, forcing the element to stay exactly its defined width.
	The pink box grows to 280px because it calculates width as: 200px content + 60px padding + 20px border.
	The purple box stays 200px because the 60px padding and 20px border shrink the internal content space instead.


CLASS 06
FLEX BOX MASTERY(THEORY)

1.	Think of a suitcase in a shared taxi with limited space.
flex-basis is the initial size of your suitcase — how big your space starts before sharing adjustments.
flex-grow is how much your suitcase expands when there is extra space in the taxi.
flex-shrink is how much your suitcase squeezes when the taxi is too full.
So basis = starting size, grow = expansion power, shrink = compression control.
2.	align-items: stretch can fail when the item has a fixed height set, because stretch can’t override it.
.container { display: flex; align-items: stretch; height: 200px; }
.box { height: 50px; background: red; }
Here .box will NOT stretch because height: 50px locks its size so you can remove the fixed height or use height: auto.

ENGINEERING THINKING

1.	The logo and button are each given flex: 1, so they take up equal space on the left and right sides. The navigation list sits between them, causing the nav items to remain perfectly centered. Even if the logo or button content changes width, the centered menu stays in the middle because both side sections grow equally.

CLASS 07
CSS GRID AND LAYOUT COMPLEXITY(THEORY)

1.	Choose grid when you're designing a two dimensional layout,like a dashboard with some tags like sidebar, header, widgets too and another example is when you want to create a photo gallery, its better created with grid and also when you want to design a magazine where each articles appear differently.
2.	Grid template areas lets you name sections of a layout (e.g., "header", "sidebar", "main") and visually arrange them in the CSS.
It makes sense when building page layouts because the structure is easier to read and maintain. while the template columns is useful when you only need to define column sizes and don't need named layout regions.

ENGINEERING THINKING
1A. To be done on paper
1b. to me, fr is needed when you want a particular row or column to share the space thats available and auto will just take the space of the content only while percentage is for something fixed.
2. code

CLASS 08
TAILWIND CSS FUNDAMENTALS(THEORY)
1. Utility-first means you build your design using small ready-made classes (like `p-4`, `text-center`, `bg-blue-500`) instead of writing custom CSS for every component.
Tailwind prefers this because it is faster, keeps all styling in one place, and reduces the need to constantly switch between HTML and CSS files.

2. According to me research, JIT(just in time) in tailwind is all about building styles when needed instead of generating lots of unused styles.

PRODUCT THINKING
1. Tailwind may look messy at first because of many classes in the HTML, but everything is visible in one place.It makes maintenance easier since I don't need to jump between HTML and CSS files.
It keeps the design consistent because everyone uses the same set of utility classes.
Unused styles are removed automatically, so the final CSS file stays small.And lastly updates websites very fast.

ENGINEERING THINKING
1. code.

CLASS 09
ADVANCED TAILWIND CSS(THEORY)
1.Break points is all about design based on the size of the screen and md: is for medium screens like for instance if i have md: text-sm makes text smaller on desktops because automatically tailwind css operates mobile.
2. Arbitrary values let one use any custom size directly.

ENGINEERING PRACTICE
1. dark mode let users switch between the normal light mode and dark mode and to set dark mode for instance we have bg:white dark:bg-black.
2. code.

CLASS 10
MEMORY AND VARIABLES(THEORY)

1. to start with var is a traditional way of creating variables and the value can be chnaged, but LET is the modernised way and its value can be changed anytime unlike var while const is those values that a new value cant be assigned to it,but you can still add ,remove it just only stops you from replacing the whole object.
2. Temporal dead zone to my undrerstanding is all about not being able to use a variable before creating it like for instance,
console.log(name);
let name = monsurah
so,javascripts will show an error.
3. i have no idea.

PRODUCT THINKING
1. THE display value will use let,because the displayed value changes time to time 
OPerator also use let because the user might want to use any of it and
Previous operand also use let because it changes after each calculation.
const is meant for values that wont change throughout the app.


CLASS 11
CONTROL FLOW AND COMPARISON(THEORY)
1. To explain ==this convert data types and ===this is very strict type of equality,it compares both value and data types. e.g
5=="5"...this will give true
5==="5" ...this will give false because the "5" is a string and not just number.
2. optional chaining ...I have no idea.
3. NO IDEA TOO

ENGINEERING THINKING
1. 
function validateLogin(user) {
  let errors = [];

  //for username
  if (!user?.username || typeof user.username !== "string") {
    errors.push("Username is required");
  }

  // password (required)
  if (!user?.password || typeof user.password !== "string") {
    errors.push("Password is required");
  }

  // rememberMe (optional, default = false)
  let rememberMe = user?.rememberMe ?? false;

  return {
    valid: errors.length === 0,
    errors,
    rememberMe
  };
};

2. 
function gradeCalc(score) {
  if (typeof score !== "number") return "Invalid input";

  let pass = score >= 50 ? "Pass" : "Fail";

  let grade =
    score >= 90 ? "A" :
    score >= 80 ? "B" :
    score >= 70 ? "C" :
    score >= 60 ? "D" : "F";

  let distinction = score >= 90 && "Distinction";

  return {
    pass,
    grade,
    distinction
  }
};


CLASS 12
FUNCTIONS AND FUNCTIONAL PROGRAMMING(THEORY)
1. Function declarations are fully lifted to the top of memory, so JavaScript already knows the function exists.
Function expressions are treated like variables (let/const), so only the variable is hoisted, not the function inside it.
2. A pure function returns same value everytime you call it .for imstance
function add(a, b) {
  return a + b;
}.

3. A callback is just a function you pass into another function, so it can be called back later.
A higher-order function is any function that either takes another function as an argument, or returns a function.
they are fundamentals because javascript is asynchronous ,it needss things like API's to work.

PRODUCT THINKING
1. I will use +,-,square rooot,* and division because they are all pure functions.
ENGINEERING THINKING
1. 
function compose(f,g,h){
  return function(x){
    return f(g(h(x)));
  }
}
A compose function combines multiple function into one function. The expression compose (f,g,h)(x) means that f(g(h(x))) are executed from right to left.

for instance
js
function add2(x){
  return x+2;
}
function subtract4(x){
  return x - 4;
};
const result = compose(add2,subtract4);
console.log(result(-2));

CLASS 13
DATA STRUCTURES(THEORY)
1. Use an array when you have a list of similar things,Order matters (first, second, third…)you want to loop, map, filter, reduce, etc.
Example:
const scores = [50, 70, 85, 90]; 
but you use object when you want something structured like a user profile with name,id ,age,favorite color and all.

2. No idea.

CLASS 14
DOM MANIPULATION AND EVENTS (THEORY)
1. Event bubbling is when event starts from the clicked elements and moved to parents element while event capturing starts from the outer parents and moves down to the clicked element. i can use capturing when parents needs to react before the child and bubbling can be used anytime.
2. Instead of adding a click listener to every button, add one listener to the parent and let it handle clicks from the children.
Example:
A todo list with 100 items. instead of adding 100 listeners i will add 1 listener to th <ul> and detect which item was clicked.
3. InnerHTML vs createElement/textContent innerHTML can run harmful code if users enter malicious content.CreateElement and textContent treat input as plain text, making them safer.

ENGINEERING THINKING
1. 

PRODUCT THINKING
1. 

CLASS 15
PERSONAL DASHBOARD(THEORY)
PERSONAL REFLECTION
1. The hardest part of this mini project is the engineering thinking aspect ,because the questions a applied questons and I have never think that way before. secondly is the java script aspect,my javascript concept is very low and im still working towards being better. and the debugging aspect,well it has not been easy,but immediately there is error ,i check my codes thoroughly and technically so as to check where the exact error is from.

2. TO be honest,when i get stucked at some point ,i used my brain or seek fro help from colleagues ,but if we are unable to get the actual code needed,i will ask google for directives.

3. my code organaisation is 7/10 and if i'm to start again,i will write more on my reflection questions because i learnt more from the questions.
4. NIL 

ENGINEERING BEST PRACTICE
1. thngs i did well are a)i have a good structure b)i use my brain for the questions even though i made research for some questions and lastly,the git hub struture. and things i would love to iprove on are 1)my knowledege on application questions,problem solving skills and tehnical thinking.

CLASS 16
THE EVENT LOOP AND PROMISES(THEORY)
1. javascript event loop alows js to run asynchroously.like running in motion,fixing a task to another task .So we have call stack,this is where we have functions that are been executed  and task queue stores callback,and fro the name microtask queue. i.e it has higher priority that task queue.
1. macrotask have large work todo while microtask runs imediately 

CLASS 17
ASYNC/AWAIT/AND FETCHPI
1. async/await is like a structured way to work with promises. and much easier to debug
for instance.
js
async function getUsers() {
  const response = await fetch("https://Api.com/online_users");
  const data = await response.json();
  console.log(data);
}
getUsers();

2. we use try and catch whenever an asynchronous function can fail and if we dont use it,there is high tendency of error.for instance
js:
async function getUsers() {
  const response = await fetch("wrong-url");
}
getUsers();

PRODUCT THINKING
1. Debounce (500ms)



