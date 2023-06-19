locals {
  config_path        = "../.config"
  global_config_path = "../../.config"
  area               = file("${local.global_config_path}/area")
  env                = file("${local.config_path}/env")
  env_name           = "Development"
  name               = "${local.area}-${local.env}"
  project_id         = local.name
  workspace          = basename(path.cwd)
  github_repository  = file("${local.global_config_path}/repo-name")
}

terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "=4.69.1"
    }
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "=4.69.1"
    }
    github = {
      source  = "integrations/github"
      version = "=5.28.0"
    }
  }
}

provider "google" {
  project = local.name
}

provider "google-beta" {
  project = local.name
}

provider "github" {
  token = var.github_token
}

# The first time that this is run, the following block needs to be commented out so 
# the bucket can be created before terraform tries storing the state there
terraform {
  backend "gcs" {
    bucket = "mrodrig-dev-tfstate"
    prefix = "bootstrap"
  }
}

resource "google_storage_bucket" "state" {
  name          = "mrodrig-dev-tfstate"
  force_destroy = false
  location      = "us-east1"
  storage_class = "STANDARD"
  versioning {
    enabled = true
  }
}
