data "github_repository" "main" {
  full_name = local.github_repository
}

resource "github_repository_environment" "environment" {
  repository  = data.github_repository.main.name
  environment = local.env_name
}

resource "github_actions_environment_secret" "gcp_service_account" {
  repository      = data.github_repository.main.name
  environment     = github_repository_environment.environment.environment
  secret_name     = "GOOGLE_APPLICATION_CREDENTIALS"
  plaintext_value = base64decode(google_service_account_key.main.private_key)
}
