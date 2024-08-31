# [1.3.0](https://github.com/digitable-lol/light-traffic/compare/v1.2.3...v1.3.0) (2024-08-31)


### Bug Fixes

* added "final_report_color" field to report model ([935fde5](https://github.com/digitable-lol/light-traffic/commit/935fde5c794212c45385f8853a7cbb685fcd6d99))
* added "is_deleted" field to all models, ([e232577](https://github.com/digitable-lol/light-traffic/commit/e23257795d31102e24d43517007faec441a04a81))
* added employee_mail field to employee model ([2032571](https://github.com/digitable-lol/light-traffic/commit/2032571a16a553f9056d311817b443319a926b00))
* added objective_description to Objective model, fixed "project_description" spelling ([5dcb3c4](https://github.com/digitable-lol/light-traffic/commit/5dcb3c473da3e231901c33867af9d83da709141f))
* change methods spelling in views ([e278255](https://github.com/digitable-lol/light-traffic/commit/e278255bc8262ddb90161b42c936deaf1e03137d))
* changed DB_HOST to container name ([a6fbe91](https://github.com/digitable-lol/light-traffic/commit/a6fbe91b8c813b25165d8a34efb5359616877ab1))
* changed log location ([3dd3435](https://github.com/digitable-lol/light-traffic/commit/3dd3435c51c42993d7d9e1e2b127e3e83fda2836))
* changed on_delete func from CASCADE to DO_NOTHING in all models ([98cd389](https://github.com/digitable-lol/light-traffic/commit/98cd389e8ad2fe3bc26679d2e5139332106ff6ac))
* changed oneToOne to ForeginKey in Report model ([6fdbbfc](https://github.com/digitable-lol/light-traffic/commit/6fdbbfccf53b77f3895c92dd919b9cb29cb31ec5))
* changed spelling from "delete: to "destroy" ([0744ac7](https://github.com/digitable-lol/light-traffic/commit/0744ac7dca9d4cdcf8a9f3060fa3b3207f1cc4a2))
* changed spelling from "read" to "retrieve" ([26def45](https://github.com/digitable-lol/light-traffic/commit/26def45e4afcda8831075ac4b874ac4b0fb7393a))
* changed timezone from UTC to MSK ([cb96ac5](https://github.com/digitable-lol/light-traffic/commit/cb96ac513b9f12d03920d9462550739826ecbb3c))
* delete unnecessary import ([f5298cf](https://github.com/digitable-lol/light-traffic/commit/f5298cf585335c3396beba5a000a9438e2a5f741))
* is_deleted fs hidden from the object creation form for all models ([234ac64](https://github.com/digitable-lol/light-traffic/commit/234ac6490433e56d7b7c9b15e71ce10409ae4f3a))
* list methods now shows only not "deleted" objects for all models ([4124dad](https://github.com/digitable-lol/light-traffic/commit/4124dad14b458dcd992a0efdf633b14b22c5e72c))
* method destroy for all models now changes is_deleted field value to True instead of deleting object from db ([5b25127](https://github.com/digitable-lol/light-traffic/commit/5b2512701f324d657129b70c237dac2c694c96f6))
* retrieve methods shows only not "deleted" objects for all models ([bad610a](https://github.com/digitable-lol/light-traffic/commit/bad610a42d337d5c978ed8109ce4cbbcffd426ed))


### Features

* add goals table ([2d6a169](https://github.com/digitable-lol/light-traffic/commit/2d6a1692f91216e5983ce08a79419f6d1a265b6e))
* add status selector ([1cc2665](https://github.com/digitable-lol/light-traffic/commit/1cc266554c51c35eef4b92ab40fbaac9d481c5d8))
* add timeline to the reports page ([6ba90e0](https://github.com/digitable-lol/light-traffic/commit/6ba90e090edcdc3f47313375997c2e782f96f9c5))
* create timeline ([088bfa8](https://github.com/digitable-lol/light-traffic/commit/088bfa8fe1f61815fbb357c6b814454054827f67))
* Docker-compose.yaml for config containers ([54d6786](https://github.com/digitable-lol/light-traffic/commit/54d6786cafbd70828c5107d2070922692c93a31a))
* Dockerfile ([17d9396](https://github.com/digitable-lol/light-traffic/commit/17d9396e78304305c29feb9e1785cad5b5cc916e))
* filters by choose for all models in admin panel, search field for all models, show general fields in sheet for all models ([bab7dfc](https://github.com/digitable-lol/light-traffic/commit/bab7dfce1a4a7dc04d91765863401330ac02d5ac))
* list method for projects model shows projects that are appropriate in time ([63cd46d](https://github.com/digitable-lol/light-traffic/commit/63cd46db5b3ca8e6683ad03c418f9ccad6d4b9f0))
* logger connect to app ([681202b](https://github.com/digitable-lol/light-traffic/commit/681202be3b6152544c5d9fec3c4f5e81c1aca8b9))
* logger for "list" methods ([6e9c5c7](https://github.com/digitable-lol/light-traffic/commit/6e9c5c72d8062b15cd1fc688744645a99e00a65d))
* logging for create methods ([75e3298](https://github.com/digitable-lol/light-traffic/commit/75e32989e04465a39babd5353266d8de2fca50c1))
* logging for destroy methods fix: retireve request info ([39eb752](https://github.com/digitable-lol/light-traffic/commit/39eb752e31aa8cfa5b55b86a7b3fda9afb756540))
* logging for retrieve methods ([66e320d](https://github.com/digitable-lol/light-traffic/commit/66e320d459daa86c41be9f769ac8e06893a24aff))
* search method for employes model ([4270fbe](https://github.com/digitable-lol/light-traffic/commit/4270fbeb3deeeb6fc0d141bcc5df9d7f3e57bd37))
* update dependencies ([8bafb81](https://github.com/digitable-lol/light-traffic/commit/8bafb81b1f8d3ec9202fcc1a34f2fd0dcdf57e04))
* Update method for Employees model ([71fd368](https://github.com/digitable-lol/light-traffic/commit/71fd368daec9ea616ed2842ac6e68091a8d3b6b3))
* Update method for Objective model ([c473751](https://github.com/digitable-lol/light-traffic/commit/c473751e0774b3f448d8c9d6ddb099a8ceba3c25))
* Update method for Report model ([fc84058](https://github.com/digitable-lol/light-traffic/commit/fc84058ad2d9303e6c012c783cdd80e1039fd24c))
* use goals table on report overlay ([6d1c99d](https://github.com/digitable-lol/light-traffic/commit/6d1c99d77c633fe8f5b9324253887259e9a6a6f0))

## [1.2.3](https://github.com/digitable-lol/light-traffic/compare/v1.2.2...v1.2.3) (2024-08-20)


### Bug Fixes

* routing with using environment basename ([#12](https://github.com/digitable-lol/light-traffic/issues/12)) ([dfa6c5f](https://github.com/digitable-lol/light-traffic/commit/dfa6c5fd2835653f2cc8ed61db02dd1f1e4f6e9b))

## [1.2.2](https://github.com/digitable-lol/light-traffic/compare/v1.2.1...v1.2.2) (2024-08-20)


### Bug Fixes

* get assets with using another paths in url ([#11](https://github.com/digitable-lol/light-traffic/issues/11)) ([d07e8d7](https://github.com/digitable-lol/light-traffic/commit/d07e8d747dcf6fbab01a5b16b66929d0654e9a36))

## [1.2.1](https://github.com/digitable-lol/light-traffic/compare/v1.2.0...v1.2.1) (2024-08-20)

### Bug Fixes

- getting base url with demo page ([#10](https://github.com/digitable-lol/light-traffic/issues/10)) ([4f9849c](https://github.com/digitable-lol/light-traffic/commit/4f9849c8b57ce4c5c1dbb96a1e10133081ad2eba))

# [1.2.0](https://github.com/digitable-lol/light-traffic/compare/v1.1.0...v1.2.0) (2024-08-20)

### Features

- connect ci with publishing demo page ([#8](https://github.com/digitable-lol/light-traffic/issues/8)) ([6eb02f5](https://github.com/digitable-lol/light-traffic/commit/6eb02f502c8e778a79c359d7b4bf0f54f9ddf3f2))

# [1.1.0](https://github.com/digitable-lol/light-traffic/compare/v1.0.0...v1.1.0) (2024-08-20)

### Features

- **backend, frontend:** add Swagger, CRUD for views at backend & CI repair at frontend ([#6](https://github.com/digitable-lol/light-traffic/issues/6)) ([ad1e88b](https://github.com/digitable-lol/light-traffic/commit/ad1e88bf13f1c4584d8a7a42787d4153f03f490b))
- build demo page ([#7](https://github.com/digitable-lol/light-traffic/issues/7)) ([43a02b7](https://github.com/digitable-lol/light-traffic/commit/43a02b7dffed6faa2e58a11242a71c3fdea5da09))
