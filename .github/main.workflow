workflow "Deploy" {
  on = "push"
  resolves = ["Publish"]
}

action "OnlyMaster" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Publish" {
  uses = "JamesIves/github-pages-deploy-action@master"
  needs = ["OnlyMaster"]
  env = {
    BRANCH = "gh-pages"
    BUILD_SCRIPT = "npm install && npm run build:github"
    FOLDER = "docs"
  }
  secrets = ["d9fa8d9cc2af521516fe450835b353f48754c7e6"]
}
