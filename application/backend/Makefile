install:
	pip3.11 install -r requirements.txt

lint_code:
	DJANGO_SETTINGS_MODULE=app.settings python3.11 -m pylint --load-plugins pylint_django manage.py

test_unit:
	python3.11 -m pytest ./**/*/__tests__/

requirements:
	rm -rf requirements.txt && pip3.11 freeze >> requirements.txt
