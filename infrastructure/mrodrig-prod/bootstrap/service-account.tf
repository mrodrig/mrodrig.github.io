resource "google_service_account" "main" {
  account_id   = "github-actions"
  display_name = "Github Actions"
  description  = "CI/CD Deployment Service Account"
}

resource "google_service_account_key" "main" {
  service_account_id = google_service_account.main.name
}

resource "google_project_iam_member" "owner" {
  project = local.project_id
  role    = "roles/owner"
  member  = google_service_account.main.member
}
