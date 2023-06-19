locals {
  config_path        = "../.config"
  global_config_path = "../../.config"
  area               = file("${local.global_config_path}/area")
  env                = file("${local.config_path}/env")
  name               = "${local.area}-${local.env}"
  project_id         = local.name
  workspace          = basename(path.cwd)
}

terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "=4.69.1"
    }
  }
}

provider "google" {
  project = local.name
}

# The first time that this is run, the following block needs to be commented out so 
# the bucket can be created before terraform tries storing the state there
terraform {
  backend "gcs" {
    bucket = "mrodrig-dev-tfstate"
    prefix = "firestore"
  }
}
