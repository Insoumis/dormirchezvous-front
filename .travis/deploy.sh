openssl aes-256-cbc -K $encrypted_72801a6f95a5_key -iv $encrypted_72801a6f95a5_iv -in .travis/deploy.enc -out /tmp/deploy_rsa -d
eval "$(ssh-agent -s)"
chmod 600 /tmp/deploy_rsa
ssh-add /tmp/deploy_rsa

npm run build

rsync -e ssh -avz --delete-after $TRAVIS_BUILD_DIR/dist dormirchezvous@163.172.60.184:/home/dormirchezvous/front
