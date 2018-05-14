#!/bin/bash

VERSION_LABEL=''
CAN_PUBLISH_BRANCH_TO_GITHUB=''
CAN_PUBLISH_DOCUMENTATION_TO_WEBSITE=''
CAN_PUBLISH_NPM_PACKAGE=''
CAN_PUBLISH_TAG_TO_GITHUB=''

while getopts "v:bdnt" opt; do
  case $opt in
    v)
      VERSION_LABEL="${OPTARG}"
      ;;
    b)
      CAN_PUBLISH_BRANCH_TO_GITHUB='true'
      ;;
    d)
      CAN_PUBLISH_DOCUMENTATION_TO_WEBSITE='true'
      ;;
    n)
      CAN_PUBLISH_NPM_PACKAGE='true'
      ;;
    t)
      CAN_PUBLISH_TAG_TO_GITHUB='true'
      ;;
    *)
      echo "Invalid falg: -$opt"
      ;;
  esac
done


# fancy logging vars/functions
CLR_GREEN=`tput setaf 2`
CLR_RESET=`tput sgr0`

function fancyEcho {
  echo "${CLR_GREEN}$1${CLR_RESET} $2"
}

function fancyWarn {
  colorRed=`tput setaf 1`
  echo "${colorRed}$1${CLR_RESET} $2"
}

# make sure a version is passed in
if [ -z "$VERSION_LABEL" ]; then
	fancyWarn "ERROR:" "Please supply a valid semver version with: \"-v {version}\"".
  exit 1
fi

# check for a dirty branch
if [ -d ".git" ]; then
	changes=$(git status --porcelain)

	if [ -z "${changes}" ]; then
    fancyEcho "Releasing" "'$VERSION_LABEL'..."
  else
		fancyWarn "ERROR:" "Please commit staged files prior to releasing."
    exit 1
	fi
fi

# establish branch and version name variables
MASTER_BRANCH=master
RELEASE_BRANCH=$VERSION_LABEL

# path to npm package
PACKAGE_PATH=src/packages/ids-css/

# create a new release branch for the version
function createReleaseBranch {
  fancyEcho "Creating" "the release branch"
  git checkout $MASTER_BRANCH
  git checkout -b $RELEASE_BRANCH
  cd $PACKAGE_PATH
  npm version $VERSION_LABEL --no-git-tag-version
  cd ../../../
  git commit -am "Incrementing version number to $VERSION_LABEL"

  if [ $? -gt 0 ]; then
    fancyWarn "Error!" "exited with code $?";
    exit 1;
  fi
}

# tag the release and push it to github
function publishTagToGithub {
  fancyEcho "Publishing" "(-t) tag to github.com"
  # git tag v${VERSION_LABEL}
  git push origin tags

  if [ $? -gt 0 ]; then
    fancyWarn "Error!" "exited with code $?";
    exit 1;
  fi
}

# push the release branch to github
function publishBranchToGithub {
  fancyEcho "Publishing" "(-b) branch '$RELEASE_BRANCH' to github.com"
  git push origin $RELEASE_BRANCH

  if [ $? -gt 0 ]; then
    fancyWarn "Error!" "exited with code $?";
    exit 1;
  fi
}

# publish the documentation
function publishDocumentationToWebsite {
  fancyEcho "Publishing" "(-d) documentation to design.infor.com"
  npx gulp publish

  if [ $? -gt 0 ]; then
    fancyWarn "Error!" "exited with code $?";
    exit 1;
  fi
}

# publish the npm package
function publishNpmPackage {
  fancyEcho "Publishing" "(-n) npm package to npmjs.org"
  npm publish $PACKAGE_PATH

  if [ $? -gt 0 ]; then
    fancyWarn "Error!" "exited with code $?";
    exit 1;
  fi
}

# main
createReleaseBranch

if [ "$CAN_PUBLISH_BRANCH_TO_GITHUB" = true ] ; then
  publishBranchToGithub
fi

if [ "$CAN_PUBLISH_TAG_TO_GITHUB" = true ] ; then
  publishTagToGithub
fi

if [ "$CAN_PUBLISH_DOCUMENTATION_TO_WEBSITE" = true ] ; then
  publishDocumentationToWebsite
fi

if [ "$CAN_PUBLISH_NPM_PACKAGE" = true ] ; then
  publishNpmPackage
fi

fancyEcho "Done!"
