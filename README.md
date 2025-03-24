# GitDox

GitDox is a revolutionary GitHub app that transforms how teams handle documentation by completely automating the process. It intelligently analyzes your codebase, pull requests, and issues to generate comprehensive documentation that evolves alongside your code. This project is written in TypeScript and built with Node.js, leveraging React and Next.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Repository Structure](#repository-structure)
- [Frameworks and Libraries](#frameworks-and-libraries)
- [Features](#features)
- [Configuration Options](#configuration-options)
- [FAQ](#faq)
- [License](#license)
- [Release Notes](#release-notes)

## Installation

As this is a Node.js project, make sure you have Node.js and npm installed on your system. Follow the below steps to install and run the project:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/username/GitDox.git
    ```

2. Navigate to the project directory:

    ```bash
    cd GitDox
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Access the application at `http://localhost:3000`.

## Usage

You can use GitDox to generate documentation for your projects automatically. Once you have it installed and running, visit `http://localhost:3000` to access its features.

## Repository Structure

This repository is organized as follows:

```
📁 //
  📄 .gitignore 
  📄 README.md 
  📁 app/
    📁 actions/
      📄 waitlist.ts 
    📁 components/
      📄 avatar.tsx 
      📄 email-template.tsx 
      📁 icons/
        📄 discord-icon.tsx 
        📄 facebook-icon.tsx 
        📄 instagram-icon.tsx 
        📄 linkedin-icon.tsx 
        📄 x-icon.tsx 
      📄 social-icon.tsx 
      📝 waitlist-form.tsx 
      📝 waitlist-signup.tsx 
      🖼 favicon.ico  
      ⌨ globals.css  
      📝 layout.tsx  
  ...
```

Each directory contains files related to their specific functionality within the application.

## Frameworks and Libraries

This project utilizes several frameworks and libraries, including:

- [Node.js](https://nodejs.org/): A JavaScript runtime for server-side execution.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/): A React framework for building server-rendered applications.

### Dependencies in package.json:
The `package.json` includes various dependencies essential for running GitDox, such as:
```json
"dependencies": {
  "@radix-ui/react-slot": "^1.1.2",
  "@radix-ui/react-toast": "^1.2.6",
  "@upstash/redis": "^1.34.5",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.482.0",
  "next": "15.1.0",
  "nodemailer": "^6.10.0",
  "react": "^19.0.0",
  ...
}
```

## Features

GitDox provides numerous key features aimed at enhancing documentation management:

1. **Code Analysis**: Automatically analyzes your codebase to extract structure, functions, and relationships without manual input.
2. **Pull Request Context**: Preserves insights from pull request discussions about decisions made during development.
3. **Issue Integration**: Captures context from issues to provide comprehensive insights into implementation details.
4. **Intelligent Documentation**: Maintains an up-to-date set of documents that evolve along with your codebase.
5. **User Notifications**: Integrates toast notifications via Radix UI for feedback on actions performed within the app.

## Configuration Options

Users can customize their experience through several options within GitDox:
  
1. **README Format**: Configure different styles for generated READMEs based on specific needs.
2. **Custom Templates**: Create tailored documentation templates that align with organizational branding.
3. **PR Behavior Control**: Set rules on when GitDox creates documentation pull requests—either automatically or manually.

### ESLint Configuration
The project employs ESLint with a configuration focused on Next.js best practices defined in `eslint.config.mjs`. The rule `"react/no-unescaped-entities"` has been turned off to accommodate specific content requirements.

## FAQ

### Is GitDox free to use?
GitDox offers both free tiers for public repositories as well as premium plans for private repositories with advanced features.

### How does GitDox handle sensitive code?
All processing occurs locally within your repository context without external storage, maintaining privacy throughout documentation generation.

### What programming languages does GitDox support?
Currently supports popular languages such as JavaScript, TypeScript, Python, Java, Go, Ruby, and C#. We are continually working on adding more based on community feedback.

### Can I customize the documentation style?
Yes! Complete customization of templates is supported through configuration files allowing tailored outputs suited for individual projects.

## License

This project is licensed under no specific license at this time.

## Release Notes

### Version: 1 (Last updated: March 24, 2025)

#### New Features Added:
- Enhanced functionality in intelligent code analysis methodology for generating dynamic README content based on ongoing changes in the codebase.

#### Improvements:
- Modified ESLint configuration in `eslint.config.mjs` to enhance compatibility with Next.js core web vitals by turning off certain rules that could hinder development flexibility.

--- 

This README was generated by GitDox Agent.
