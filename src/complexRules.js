import {MIN_RULE_LENGTH} from "./utils/constants/rules"


// KISS !!


export const matchRulesComplex = (rule, value) => {
    if(value.length === rule.length && rule.length > 3){
        if(!rule.startsWith){
            return true;
        }
        if(value.startsWith(rule.startsWith)){
            return true
        }
    }
    return false;
}


export const matchRulesComplexSimple = (rule, value) =>
    (value.length === rule.length && rule.length > MIN_RULE_LENGTH) &&
    (!rule.startsWith || value.startsWith(rule.startsWith));



export const getFruits = () => {
    const fruits = ['Frutilla', 'Banana', 'Pera']
    fruits.push('Manzana')


}