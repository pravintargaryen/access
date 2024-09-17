package example

default allow = false

allow {
    input.role == "Admin"
    input.action == "manage"
}

allow {
    input.role == "User"
    input.action == "view"
}
