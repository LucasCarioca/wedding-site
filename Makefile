.PHONY := all

start-landing: 
	cd landing;
	yarn start;

start-app:
	cd website-app;
	yarn start;