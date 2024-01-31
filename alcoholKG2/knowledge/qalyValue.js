export function qalyValue(outputEntry, features) {

    if (features.alcohol_abuse > 0){

	return -0.0688071*features.age + 0.0570005*(features.gender==1) - 0.1667344*(features.race==1) + 0.1383614*(features.race==2) - 0.0536393*(features.race==3) - 0.0257437*((features.smokeyear > 0) && (features.cigpday > 0) && (features.quityear==0)) - 0.00000938*features.totalcholesterol + 0.0001198*features.hdl - 0.0002621*features.sbp + 0.0139843*features.htmedication - 0.0316753*features.diabetes + 5.446518


/*

        return 4 - 0.1*(features.age-40) + 0.1*(features.gender==0) + 0.1*(features.race==1) + 0.01*(features.hxbngnbiopsy==1) + 0.01*(features.hxbngnbiopsy > 1) + 0.01*(features.biopsyathyperplasia==2) + 0.01*(features.fambc==1) + 0.01*(features.fambc == 2) + 0.01*(features.colitis==1) + 0.01*(features.fap==1) + 0.01*(features.bmi >= 30) + 0.01*(features.hiv==2) + 0.01*(features.famcrc==1) + 0.01*(features.famcrc==2) + 0.01*(features.famcrc==3) + 0.01*(features.famcrc==4) + 0.01*(features.ascvd - 0.1)

*/  
  
} else {return 0}

}


