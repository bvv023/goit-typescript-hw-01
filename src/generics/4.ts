type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
  console.log("Updating user with values:", initialValues);
  
  if (initialValues.email) {
    console.log(`Updating email to: ${initialValues.email}`);
  }

  if (initialValues.password) {
    console.log(`Updating password to: ${initialValues.password}`);
  }

  // Інші оновлення, якщо необхідно
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123'
});
