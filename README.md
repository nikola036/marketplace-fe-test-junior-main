
# Coding Challenge


Create a simple to-do list application using Angular.

You **MUST** use HTML, SCSS (`mixins` and `variables`) and Observables.    
You **CAN** use Angular Material, Angular Router, NgRx, git.    
You **SHOULD NOT** use bootstrap, utility libraries (~~Lodash~~, ~~jQuery~~, …)

This application works as a single page application, you **MUST** persist data (through local storage, using a json server, or else). Data **MUST NOT** be lost upon refresh.

> Keep a simple approach (KISS) and DRY.

You can ship your code in a zip folder or from a git repository (make sure we can access it).    
You are free to create your own theme and design, this SHOULD represent at least 25% of your deliverable and will be considered (friendly UI much appreciated).

`header` and `footer` are just placeholders, feel free to add anything you might judge necessary (title, numbers of lists, number of items, etc…).

`SCSS` files **SHOULD NOT** contain hardcoded value, those need to be defined in a `variable.scss` file, or else.

____________________________________  

### Here are some user stories defined by product manager (a good guy) :

#### #STY-1 As a user, I want to add a new item so that I can update the list.

Create a __reactive__ form with an input and a button.    
This form will permit the user to add a new item to the to-do list.     
User should only be able to enter text, you must validate the form (only text), and prevent the user from submitting empty or duplicated value.    
Checking if value is duplicated (against the actual list) should be done with an async validator.

#### #STY-2 As a user, I want to see a remove button when hovering an existing item so that I can remove it from the list.

On desktop, the user should have the ability to remove an element from the list via a button which appear on hovering. On mobile, no guidelines, do the best you can.

#### #STY-3 As a PO, I want header and footer to be static and only the list should be scrollable so that the design requirements are met.

Only the list should be scrollable, the other elements should stay on the screen.  
On mobile, the form for adding an element should be at the end of the list. (See wireframe)

#### #STY-4 As a PO, I want the application to be responsive and mobile friendly so that it can be use on mobiles.

Only desktop and mobile to be defined, you are free to use the breakpoints you want.  
Design must be adaptive (mobile, desktop) and responsive. (See wireframe)


____________________________________  

### Optional user stories :

#### #OPT-1 As a user, I want to click an item so that I can modify it.

Clicking on an item makes it editable, it can be achieved with an input or an editable html zone.    Editing an item should follow the same rule of creation (no empty value, no duplicated value, only text).

#### #OPT-2 As a user, I want to be able to create several lists so that my ideas are in order.

You are free to create the minimalist design you will need to realize that user story.
List will have a name so it is easier to find them back. The user should be able to navigate from one list to another list without loosing data.

____________________________________  

### Wireframe :

<img width="946" alt="image" src="https://user-images.githubusercontent.com/75487534/194525233-f9b6726d-8722-449c-82c6-c5713b53cdb3.png">

