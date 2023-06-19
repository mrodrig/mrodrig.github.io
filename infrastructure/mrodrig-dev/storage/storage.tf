resource "google_storage_bucket" "default" {
  provider = google-beta
  name     = "${local.name}.appspot.com"
  location = "US"

  cors {
    max_age_seconds = 3600
    method          = ["GET"]
    origin          = ["*"]
  }
}

resource "google_firebase_storage_bucket" "default" {
  provider  = google-beta
  project   = local.name
  bucket_id = google_storage_bucket.default.id
}

resource "google_storage_bucket" "staging" {
  provider = google-beta
  name     = "staging.${local.name}.appspot.com"
  location = "US"

  lifecycle_rule {
    action {
      type = "Delete"
    }

    condition {
      age        = 15
      with_state = "ANY"
    }
  }
}
