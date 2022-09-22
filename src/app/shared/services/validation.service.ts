import { Injectable } from "@angular/core";
import { count } from "console";

@Injectable({
    providedIn: "root",
})
export class ValidationService {
    constructor() {}

    stringTrim(value: string) {
        return value.replace(/ {2,}/g, " ").trim();
    }

    alphakeyOnly(k) {
        return (
            (k > 64 && k < 91) ||
            
            k == 8 ||
            k == 32 ||
            k == 45 ||
            k === 39 ||
            k == 9 ||
            k == 189 ||
            k == 222 ||
            (k > 96 && k < 123)
        );
    }
    copyPasteCheck(charCode, check) {
        for (let i = 0; i < charCode.length; i++) {
            if (
                (charCode[i] >= 65 && charCode[i] <= 90) ||
                (charCode[i] >= 97 && charCode[i] <= 122) ||
                charCode[i] === 32 ||
                charCode[i] === 39 ||
                charCode[i] === 45 ||
                charCode[i] === 9
            ) {
            } else {
                check++;
            }
        }
        return check;
    }
    alphaNumericCharacter(e) {
     let k;
        k = e.keyCode;

        return (
            (k > 64 && k < 91) ||
            (k > 96 && k < 123) ||
            k == 8 ||
            k == 32 ||
            (k >= 48 && k <= 57) ||
            k == 45
        );
    }
    inputMaskValidation(strArray) {
      let count=0
        for (let i = 0; i < strArray.length; i++) {
            if (isNaN(strArray[i]) || strArray[i] === " ") {
            
            } else {
                count++;
              
            }
          
        }
        return count;
        
    }
    copyPasteSpecialChar(k, check) {
        for (let i = 0; i < k.length; i++) {
            if (
                (k[i] >= 65 && k[i] <= 90) ||
                (k[i] >= 97 && k[i] <= 122) ||
                (k[i] >= 49 && k[i] <= 58) ||
                k[i] === 32 ||
                k[i] === 45 ||
                k[i] === 9
            ) {
            } else {
                check++;
            }
        }
        return check;
    }
}
