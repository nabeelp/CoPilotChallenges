from faker import Faker

fake = Faker()

# Generate a random name
name = fake.name()

# Generate a random address
address = fake.address()

# Generate a random email
email = fake.email()

# Generate a random phone number
phone_number = fake.phone_number()

# Generate a random job title
job_title = fake.job()

# Generate a random company name
company_name = fake.company()

# Generate a random description
description = fake.text()

# Print the generated data
print("Name:", name)
print("Address:", address)
print("Email:", email)
print("Phone Number:", phone_number)
print("Job Title:", job_title)
print("Company Name:", company_name)
print("Description:", description)
