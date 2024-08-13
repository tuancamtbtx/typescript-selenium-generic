-include .env


.PHONY:  fmt docker

fmt:
	npm run prettier:fix

cli:
	npm uninstall @tuancamtbtx/selegen && npm unlink -g && npm install && npm run build && npm install -g .
