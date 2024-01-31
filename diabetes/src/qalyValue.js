export function qalyValue(outputEntry, features) {

if (features.diabetes <= 0) { return 0 }

let return_value = 0
/* ---------------------- Case 0: (a1c>=7) && (a1c<8) ----------------------- */
if ((features.a1c>=7) && (features.a1c<8))  {
    return_value =  +0.0964401 * features.a1c
+0.0057454 * features.age
-0.0017133 * features.a1c * features.age
-0.0169761 * ( features.gender == 0) 
+0.0110752 * features.a1c * ( features.gender == 0) 
+0.3476318 * features.hdl
-0.0601331 * features.a1c * features.hdl
-0.0127547 * features.sbp
+0.0018331 * features.a1c * features.sbp
+0.0953298 * features.wbc
-0.011332 * features.a1c * features.wbc
+0.0078572 * features.egfr
-0.0009675 * features.a1c * features.egfr
+0.0890557 * (features.af == 1)
+0.0051212 * features.a1c * ( features.af == 1) 
+0.4281663 * (features.pvd == 1)
-0.04112 * features.a1c * ( features.pvd == 1) 
+0.2624848 * (features.albuminuria == 1)
-0.0267079 * features.a1c * ( features.albuminuria == 1) 
-0.3639146

}

/* ---------------------- Case 1: (a1c >=8) && (a1c < 9) ----------------------- */
if ((features.a1c >=8) && (features.a1c < 9))  {
    return_value =  +0.6014739 * features.a1c
+0.0844604 * features.age
-0.011302 * features.a1c * features.age
-0.2002772 * ( features.gender == 0) 
+0.0302602 * features.a1c * ( features.gender == 0) 
-1.198888 * features.hdl
+0.1255204 * features.a1c * features.hdl
-0.0158204 * features.wbc
+0.0024109 * features.a1c * features.wbc
+0.0301565 * features.haemoglobin
-0.0027238 * features.a1c * features.haemoglobin
-0.0197284 * features.egfr
+0.0025478 * features.a1c * features.egfr
+0.327959 * (features.af == 1)
-0.0232614 * features.a1c * ( features.af == 1) 
-0.9664848 * (features.pvd == 1)
+0.1360886 * features.a1c * ( features.pvd == 1) 
-0.9706502 * (features.albuminuria == 1)
+0.1284496 * features.a1c * ( features.albuminuria == 1) 
-4.388873

}

/* ---------------------- Case 2: (a1c >= 9) && (a1c < 11) ----------------------- */
if ((features.a1c >= 9) && (features.a1c < 11))  {
    return_value =  +0.0527075 * features.a1c
+0.0154406 * features.age
-0.0036938 * features.a1c * features.age
-0.3075869 * ( features.gender == 0) 
+0.0439114 * features.a1c * ( features.gender == 0) 
-0.0327571 * ( (features.diabetes_duration >= 5.0) && (features.diabetes_duration < 10)) 
-0.3363425 * ( features.diabetes_duration >= 10) 
+0.0070602 * features.a1c * ( (features.diabetes_duration >= 5.0) && (features.diabetes_duration < 10)) 
+0.0410889 * features.a1c * ( features.diabetes_duration >= 10) 
+0.0361429 * features.bmi
-0.0039726 * features.a1c * features.bmi
+0.0066283 * features.sbp
-0.0003631 * features.a1c * features.sbp
+0.0058051 * features.heartrate
-0.0002601 * features.a1c * features.heartrate
-0.065992 * features.wbc
+0.0091927 * features.a1c * features.wbc
-0.1327072 * features.haemoglobin
+0.0145657 * features.a1c * features.haemoglobin
-0.0117739 * features.egfr
+0.0013394 * features.a1c * features.egfr
-1.359298 * (features.af == 1)
+0.1734308 * features.a1c * ( features.af == 1) 
+0.4422931 * (features.pvd == 1)
-0.0118669 * features.a1c * ( features.pvd == 1) 
+0.149251 * (((features.smokeyear > 0) && (features.cigpday > 0) && (features.quityear == 0)))
-0.0263629 * features.a1c * ( ((features.smokeyear > 0) && (features.cigpday > 0) && (features.quityear == 0))) 
+0.0486998 * (features.albuminuria == 1)
+0.0093671 * features.a1c * ( features.albuminuria == 1) 
+0.1002506

}

/* ---------------------- Case 3: a1c >= 11 ----------------------- */
if (features.a1c >= 11)  {
    return_value =  +0.789982 * features.a1c
+0.133562 * features.age
-0.0145083 * features.a1c * features.age
-0.3066307 * ( (features.diabetes_duration >= 5.0) && (features.diabetes_duration < 10)) 
-0.7182563 * ( features.diabetes_duration >= 10) 
+0.034482 * features.a1c * ( (features.diabetes_duration >= 5.0) && (features.diabetes_duration < 10)) 
+0.0753375 * features.a1c * ( features.diabetes_duration >= 10) 
-0.0491339 * features.heartrate
+0.0046208 * features.a1c * features.heartrate
-0.8703212 * (features.pvd == 1)
+0.1146522 * features.a1c * ( features.pvd == 1) 
-1.721619 * (features.albuminuria == 1)
+0.1670544 * features.a1c * ( features.albuminuria == 1) 
-6.769622

}

/* ---------------------- Overwrite rule ----------------------- */
let minimum_value = 0.1
if (return_value < minimum_value) { return_value = minimum_value }
return return_value

/*     "columns": { "age":50 ,  "egfr":0,  "a1c":0,  "hdl":0,  "sbp":0,  "wbc":0,  "af":0,  "pvd":0,  "gender":0,  "albuminuria":0,  "haemoglobin":0,  "heartrate":0,  "smokeyear":0,  "quityear":0,  "cigpday":0,  "bmi":0,  "diabetes_duration":0 },  */


/*

    if ((features.diabetes > 0 ) && (features.a1c >= 7)  ){
	return 0.4400852*features.a1c - 0.3416636*( (features.a1c >= 8.0) && (features.a1c < 9.0) ) - 0.7027786*((features.a1c >= 9.0) && (features.a1c < 11.0)) - 1.017539*(features.a1c >= 11.0) - 0.0158623*features.age + 0.0795434*(features.gender==0) - 0.0393342*(features.race==1) - 0.0081246*(features.race==3) + 0.0384882*( (features.diabetes_duration >= 5.0) && (features.diabetes_duration < 10.0)) + 0.0550436*(features.diabetes_duration >= 10.0) - 0.0006011*features.bmi - 0.0899458*features.hdl + 0.0024205*features.ldl + 0.0015893*features.sbp + 0.0028308*features.heartrate + 0.0176416*features.wbc + 0.0057687*features.haemoglobin + 0.0009386*features.egfr + 0.2190444*(features.af==1) + 0.2182102*(features.pvd==1) - 0.0482655*((features.smokeyear > 0) && (features.cigpday > 0) && (features.quityear==0)) + 0.1474379*(features.albuminuria==1) - 2.884664

    } else {
      return 0
    }
*/

}


