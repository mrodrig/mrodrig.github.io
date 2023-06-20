# [mrodrig.github.io](https://mrodrig.github.io)

[![Build Status](https://img.shields.io/github/actions/workflow/status/mrodrig/mrodrig.github.io/github-actions-frontend.yml)](https://github.com/mrodrig/mrodrig.github.io/actions/workflows/github-actions-frontend.yml)
[![Dependencies](https://img.shields.io/librariesio/github/mrodrig/mrodrig.github.io)](https://github.com/mrodrig/mrodrig.github.io)

This repository contains the code and configuration files related to my personal website - [mrodrig.github.io](https://mrodrig.github.io). This site is a ever evolving work-in-progress, but through the past few iterations it has evolved significantly from its original AngularJS 1.x codebase several years ago. Most importantly, it's mobile-friendly and responsive, supporting screen sizes from the smallest of phones to today's ultrawide monitors.

## Technology Stack

Some key technologies and products used to build this site include the following:

* Google Cloud Platform's Firebase
* HashiCorp's Terraform
* Vue 3 and Vue CLI
* TypeScript
* Less
* Rollbar
* PDF.js (via [pdfvuer](https://www.npmjs.com/package/pdfvuer))
* [Zod](https://www.npmjs.com/package/zod)
* ESLint

For more information and additional technologies, please read the relevant sub-section.

### Backend

This application uses Google Cloud Platform's Firebase product to provide backend support for this site. The Firebase functionality that this site is leveraging includes Authentication (anonymous), Firestore, Cloud Storage, and more. I've designed the backend configuration to ensure secure data access. More specifically, the site uses anonymous authentication to ensure visitors are automatically logged in using Firebase's anonymous authentication provider, allowing database and storage rules to ensure only site visitors are able to read resources. In the future, I plan to expand this site to also take advantage of other Firebase and Google Cloud features that I've used on other projects, including serverless Cloud Functions and Remote Config.

### Frontend

The frontend portion of this application uses the Vue 3 framework along with TypeScript to ensure safer typing throughout the codebase as well as increased confidence when refactoring. Frontend styling is achieved using the Less stylesheet language. Firebase is also integrated into the application to provide some certain serverless capabilities to enhance the site's capabilities. At a monitoring level, I've integrated Rollbar to better capture warnings, errors, and other critical issues that require attention.

At an NPM module level, I've integrated some neat NPM modules, such as `pdfvuer` and `zod`. The `pdfvuer` module is a Vue plugin component library which provides a clean interface for Mozilla's PDF.js project. In this project, it's used to load a PDF copy of my resumé and render it on my site in a manner that enables a responsive design while meeting modern web standards. I'm also using `zod`'s slick capabilities to validate data from external sources, including my own Firebase Firestore collections to ensure that the NoSQL documents meet the required schema before attempting to display project details.

### Infrastructure

This application uses HashiCorp's Terraform open source product to leverage the benefits of infrastructure-as-code (IaC) for this project. Using infrastructure-as-code (IaC), especially with Terraform, helps to codify the configuration of cloud infrastructure into workspaced configuration files which are reviewable and source controlled. This is especially beneficial for automating infrastructure creation and management across multiple providers, such as what I've configured in this project - Google Cloud/Firebase and GitHub.

In the context of this project, I'm using Terraform to help manage the state of two Google Cloud projects representing my development and production environments, as well as the management of GitHub Actions secrets in order to manage IAM Service Account credentials in a secure, automated manner. The infrastucture configuration files are also used to manage a Firestore database and Cloud Storage Bucket instances, as well as cross-origin resource sharing (CORS) configurations and lifecycle rules on the storage buckets.

## Development

### Backend

The current backend products that are being used can be emulated using Firebase's emulators, though they currently aren't configured in this project. Currently, the `development` environment is used for testing configuration changes due to the simplicity of this app. In the future, if additional products that would benefit from emulators are configured, such as serverless Cloud Functions, then the emulators will be initialized for this project to simplify local development and testing.

To use the `development` environment locally for configuration deployments, simply ensure that the Firebase CLI is installed by running:

```
npm install --location=global firebase-tools
```

Next, run this command to specify the `development` environment:

```
firebase use development
```

In order to deploy a configuration change out, first be sure that you're logged in on an account with access to the Firebase project via the Firebase CLI by running:

```
firebase login
```

After you've logged in, the configuration rules can be deployed by running:

```
firebase deploy
# Optionally specify certain products to deploy, such as: firebase deploy --only firestore
```

### Frontend

This application follows a pretty standard Vue web application development process. To get started, be sure you install the dependencies using NPM:

```
npm ci
```

When developing locally, run the following command to compile the components, serve the application from localhost, and enable hot-reloads for development:

```
npm run serve
```

If you want to run the linter and fix auto-fixable issues, you can just run:

```
npm run lint
```

To generate a production build of the application, simply run:

```
npm run build
```

Additional configurations to the Vue configuration can be made in the `vue.config.js` file based on the [Vue Configuration Reference](https://cli.vuejs.org/config/).

### Infrastructure

This project uses multiple Terraform workspaces to help isolate concerns by separating different aspects of the infrastructure into their own workspaces. To get started, first copy the `.env-example` file to `.env` and populate the necessary values:

```
cp .env-example .env
```

Populate the variables with proper values using the comments with links to get the correct values. Once populated, source the `.env` file to pull in the environment variables.

```
source .env
```

From here, navigate to the environment that you're working on, `mrodrig-dev` or `mrodrig-prod`. If configuring the environment from scratch, first start in the `bootstrap` directory. The `bootstrap` workspace contains the configuration files necessary to setup the Google Cloud projects, Firebase project configuration, necessary IAM Service Account, and securely stores the associated private key encrypted in Github Actions Secrets. First, initialize the Terraform workspace.

```
terraform init
```

The first time the `bootstrap` directory is initialized, be sure to comment out the `backend` state configuration since the bucket will be created on the first `terraform apply`:

```
#terraform {
#  backend "gcs" {
#    bucket = "mrodrig-dev-tfstate"
#    prefix = "bootstrap"
#  }
#}
```

Once the initial `apply` has been run, then you can uncomment this block and re-initialize the workspace to migrate the state to the Google Cloud Storage bucket that will be used to hold all of the `tfstate` files.

```
terraform init --migrate-state
```

Once the project has been bootstrapped, you can move on to the `firestore` or `storage` workspaces using the following commands to initialize the workspace and apply the configuration:

```
terraform init
terraform apply
```
