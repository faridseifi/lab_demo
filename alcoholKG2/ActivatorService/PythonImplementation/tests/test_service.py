import re
import pytest
from ..alcohol_control_package.index import qalygain


def test_alcohol_service_works():
    input= { "features": { "age": 65, "gender": 1, "race": 0, "smokeyear": 30, "quityear": 0, 
                          "cigpday": 20, "diabetes": 1, "totalcholesterol": 200, "hdl": 30, 
                          "sbp": 110, "htmedication": 0, "alcohol_abuse": 1 } }
    test=qalygain(input)
    assert test['alcohol']['qaly']['gain']==0.9465250000000003

       
        
