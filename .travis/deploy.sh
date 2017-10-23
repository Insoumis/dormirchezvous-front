openssl aes-256-cbc -K $encrypted_742418814ff4_key -iv $encrypted_742418814ff4_iv -in .travis/deploy_rsa.enc -out /tmp/deploy_rsa -d
eval "$(ssh-agent -s)"
chmod 600 /tmp/deploy_rsa
ssh-add /tmp/deploy_rsa

npm run build

rsync -e ssh -avz --delete-after $TRAVIS_BUILD_DIR/dist insoumis@163.172.60.184:/home/insoumis/sites/dormirchezvous/dev/front
