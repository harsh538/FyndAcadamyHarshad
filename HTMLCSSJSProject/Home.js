function show(){
    let genderarray=document.getElementsByName('gender');
    // let male=genderarray[0].value;
    // let female=genderarray[1].value;
    let gender=''
    if(genderarray[0].checked){
        gender=0;
    }
    if(genderarray[1].checked){
        gender=1;
    }
    console.log(gender);

    let height=document.getElementById('Input1').value;
    let weight=document.getElementById('Input2').value;
    let sugarcount=document.getElementById('Input3').value;
    let yesnoarray=document.getElementsByName('yes_no');
    let isexercise=''
    if(yesnoarray[0].checked){
        isexercise=0;
    }
    if(yesnoarray[1].checked){
        isexercise=1;
    }
     console.log(isexercise);

    let result;

    if(gender==0){
       if((height==4.6 && weight>28 && weight<34.9) || (height==5 && weight>40 && weight<53) || (height==5.4 && weight>50 && weight<64) || (height==5.8 && weight>63 && weight<70) || (height==6 && weight>72 && weight<88) ){
            if(isexercise!=1){
                if(sugarcount<6){
                    result='You are fit and healthy';
                }
                else{
                    result='You are fit but intaking more sugar'
                }
            }
            else{
                result='You are healthy but do exercise';
            }
        }
        else if(height<4.6 || height>6 || weight<28 || weight> 88 || sugarcount<0 || sugarcount>15){
            result='Please enter valid data'
        }
        else{
            result='You are unfit'
        }
    }
    else if(gender==1){
        if((height==4.6 && weight>28 && weight<34.9) || (height==5 && weight>40 && weight<50) || (height==5.4 && weight>49 && weight<60) || (height==5.8 && weight>57 && weight<70) || (height==6 && weight>65 && weight<80) ){
            if(isexercise==1){
                if(sugarcount<6){
                    result='You are fit and healthy';
                }
                else{
                    result='You are fit but intaking more sugar'
                }
            }
            else{
                result='You are healthy but do exercise';
            }
        }
        else if(height<4.6 || height>6 || weight<28 || weight> 80 || sugarcount<0 || sugarcount>15){
            result='Please enter valid data'
        }
        else{
            result='You are unfit'
        }

    }
    document.getElementById('printvalue').innerHTML=result;

}