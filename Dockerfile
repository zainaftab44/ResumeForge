# Step 1: Use Node.js as the base image for building the app
FROM node:lts AS build

# Step 2: Set the working directory inside the container
WORKDIR /var/www/html/app

# Step 3: Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application source code
COPY . .

# Step 6: Expose the development server port
EXPOSE 5174

# Step 7: Run the Vue.js development server
CMD ["npm", "run", "dev", "--", "--host"]