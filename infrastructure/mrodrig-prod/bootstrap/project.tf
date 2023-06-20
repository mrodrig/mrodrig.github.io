resource "google_project" "main" {
  name            = local.name
  project_id      = local.project_id
  billing_account = var.billing_account
  labels = {
    "firebase" = "enabled"
  }
}

resource "google_firebase_project" "main" {
  provider = google-beta
  project  = google_project.main.project_id
}
