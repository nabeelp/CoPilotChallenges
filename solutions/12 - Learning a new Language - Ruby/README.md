### Solution: Learning a new Language

#### Task Description:

You are tasked with learning the basics of Ruby programming using GitHub Copilot to assist you in completing a series of tasks.

#### Instructions:

1. Open Visual Studio Code, if not already open.
2. Create a new Ruby file named `learning_ruby.rb`.
3. Copy the text from theh tasks below into the `learning_ruby.rb` file.
4. Add a `#` before each of the lines starting with a `-` to comment them out.
5. At the end of the copied text, hit `Enter` twice and wait for GitHub Copilot to generate code snippets for the specified tasks.
6. Press tab for each snippet and when no more suggestions are forthcoming, the task is complete, so hit `Enter` to move to the next task.

#### Task 1: Variables and Output
- Generate Ruby code to declare a variable named `message` and assign it the value "Hello, World!".
- Output the value of the `message` variable.

#### Task 2: String Manipulation
- Generate Ruby code to concatenate two strings: "Hello, " and "Ruby!".
- Output the resulting string.

#### Task 3: Arrays
- Generate Ruby code to create an array containing the numbers 1 to 5.
- Output the contents of the array.

#### Task 4: Conditionals
- Generate Ruby code to check if a variable `number` is greater than 10. Output a message accordingly.

#### Task 5: Loops
- Generate Ruby code to create a loop that prints the numbers from 1 to 5.

#### Expected Output:

If implemented correctly, running the Ruby program should produce the desired output for each task.

CoPilot will generate code snippets, and the completed code should look like the following:
```ruby
# Task 1: Variables and Output
message = "Hello, World!"
puts message

# Task 2: String Manipulation
puts "Hello, " + "Ruby!"

# Task 3: Arrays
numbers = [1, 2, 3, 4, 5]

# Task 4: Conditionals
number = 11
if number > 10
    puts "Number is greater than 10"
end

# Task 5: Loops
for i in 1..5
    puts i
end
```
