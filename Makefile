-include .env


.PHONY:  commander fmt docker

fmt:
	npm run prettier:fix

cli:
	npm uninstall @trustingsocial/billingquery && npm unlink -g && npm install && npm run build && npm install -g .

docker:
	gcloud builds submit --region=asia-southeast1 --config cloudbuild.yaml

server:
	npm run dev:service