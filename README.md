Project Overview

Figma Link: [Project Design](https://www.figma.com/design/LgMjXkcHbwzJzQoZx1l4b9/Untitled?node-id=1-3&t=VytPKLcXkdA8trrT-0)

Task:

* Import the given array into your HTML and JavaScript project.
  
* Create a user interface (UI) based on the design provided in Figma.
  
* Display all 100 elements from the array in a table format. Ensure the "Name" column displays an image of the student along with their full name (first name + last name). Additionally, show "passing" or "failed" instead of the boolean value in the "Passing" column.
  
* Implement a search bar to filter table data based on first name, last name, and email. The search should be case insensitive and can be triggered by either typing in the search bar or clicking a search button.
  
* Create a flex-box layout for buttons with maximum space between them.
  
* Implement sorting functionality for the array based on different criteria:
  
Sort A->Z: Ascending order of full name

Sort Z->A: Descending order of full name

Sort by marks: Ascending order of marks

Sort by passing: Show only passing students

Sort by class: Ascending order of class

Sort by gender: Display two tables, one for female students and one for male students, shown one below the other.

Relevant Links:

[Figma Link](https://www.figma.com/design/LgMjXkcHbwzJzQoZx1l4b9/Untitled?node-id=1-3&t=VytPKLcXkdA8trrT-0)

[Array of 100 students](https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json)

Evaluation Criteria

Part 1: JSON File Import
The JSON file should be properly imported into the HTML and JS project.

Part 2: User Interface (UI)
The UI should match the given Figma design.

Part 3: Mapping of All 100 Elements in the Table
All 100 students in the JSON file should be correctly mapped to the table.  
The table should display data in the order of the JSON file by default.  
The name column of the table should include an image of the student and their full name.
The passing attribute in the JSON file should be represented as "passing" or "failed" in the table.

Part 4: Search Functionality
The search bar should filter out data based on first name, last name, and email.
The search functionality should not be case sensitive.
The table should be updated dynamically as the user types in the search bar.
The search functionality should work on handleChange or search button click events.

Part 5: Sorting Functionality
The sorting functionality should include A->Z and Z->A sorting based on full name.
The sorting functionality should include sorting by marks in ascending order.
The sorting functionality should only show students who are passing.
The sorting functionality should include sorting by class in ascending order.
The sorting functionality should show two tables for male and female students when sorting by gender.

Part 6: Flex-box with Buttons
The flex-box should include all the buttons.
The buttons should be visually appealing.

Part 7: Deployment
The repository should be created properly.
The webpage should be properly deployed.
