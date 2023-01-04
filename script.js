async function data(){
    try{
    let url="https://data.covid19india.org/v4/min/data.min.json"
    let con_fetch=await fetch(url)
    let con_json=await con_fetch.json()
    
    document.querySelector(".card-heads1").innerText="Ariyalur"
    let state_data1=(`delta:confirmed : ${con_json.TN.districts.Ariyalur.delta.confirmed}`)
    document.querySelector(".p1").innerText=state_data1
    let state_data2=(`delta:recovered : ${con_json.TN.districts.Ariyalur.delta.recovered}`)
    document.querySelector(".p2").innerText=state_data2
    let state_data3=(`delta-7:confirmed : ${con_json.TN.districts.Ariyalur.delta7.confirmed}`)
    document.querySelector(".p3").innerText=state_data3
    let state_data4=(`delta-7:recovered : ${con_json.TN.districts.Ariyalur.delta7.recovered}`)
    document.querySelector(".p4").innerText=state_data4
    let state_data5=(`delta-21_14:confirmed : ${con_json.TN.districts.Ariyalur.delta21_14.confirmed}`)
    document.querySelector(".p5").innerText=state_data5
    let population1=(`population : ${con_json.TN.districts.Ariyalur.meta.population}`)
    document.querySelector(".card-footers1").innerText=population1
    
    document.querySelector(".card-heads2").innerText="Cuddalore"
    let state_data6=(`delta:confirmed : ${con_json.TN.districts.Cuddalore.delta.confirmed}`)
    document.querySelector(".p6").innerText=state_data6
    let state_data7=(`delta:recovered : ${con_json.TN.districts.Cuddalore.delta.recovered}`)
    document.querySelector(".p7").innerText=state_data7
    let state_data8=(`delta-7:confirmed : ${con_json.TN.districts.Cuddalore.delta7.confirmed}`)
    document.querySelector(".p8").innerText=state_data8
    let state_data9=(`delta-7:recovered : ${con_json.TN.districts.Cuddalore.delta7.recovered}`)
    document.querySelector(".p9").innerText=state_data9
    let state_data10=(`delta-21_14:confirmed : ${con_json.TN.districts.Cuddalore.delta21_14.confirmed}`)
    document.querySelector(".p10").innerText=state_data10
    let population2=(`population : ${con_json.TN.districts.Cuddalore.meta.population}`)
    document.querySelector(".card-footers2").innerText=population2
    
    document.querySelector(".card-heads3").innerText="Coimbatore"
    let state_data11=(`delta:confirmed : ${con_json.TN.districts.Coimbatore.delta.confirmed}`)
    document.querySelector(".p11").innerText=state_data11
    let state_data12=(`delta:recovered : ${con_json.TN.districts.Coimbatore.delta.recovered}`)
    document.querySelector(".p12").innerText=state_data12
    let state_data13=(`delta-7:confirmed : ${con_json.TN.districts.Coimbatore.delta7.confirmed}`)
    document.querySelector(".p13").innerText=state_data13
    let state_data14=(`delta-7:recovered : ${con_json.TN.districts.Coimbatore.delta7.recovered}`)
    document.querySelector(".p14").innerText=state_data14
    let state_data15=(`delta-21_14:confirmed : ${con_json.TN.districts.Coimbatore.delta21_14.confirmed}`)
    document.querySelector(".p15").innerText=state_data15
    let population3=(`population : ${con_json.TN.districts.Coimbatore.meta.population}`)
    document.querySelector(".card-footers3").innerText=population3
    
    document.querySelector(".card-heads4").innerText="Chennai"
    let state_data16=(`delta:confirmed : ${con_json.TN.districts.Chennai.delta.confirmed}`)
    document.querySelector(".p16").innerText=state_data16
    let state_data17=(`delta:recovered : ${con_json.TN.districts.Chennai.delta.recovered}`)
    document.querySelector(".p17").innerText=state_data17
    let state_data18=(`delta-7:confirmed : ${con_json.TN.districts.Chennai.delta7.confirmed}`)
    document.querySelector(".p18").innerText=state_data18
    let state_data19=(`delta-7:recovered : ${con_json.TN.districts.Chennai.delta7.recovered}`)
    document.querySelector(".p19").innerText=state_data19
    let state_data20=(`delta-21_14:confirmed : ${con_json.TN.districts.Chennai.delta21_14.confirmed}`)
    document.querySelector(".p20").innerText=state_data20
    let population4=(`population : ${con_json.TN.districts.Chennai.meta.population}`)
    document.querySelector(".card-footers4").innerText=population4
    
    document.querySelector(".card-heads5").innerText="Dharmapuri"
    let state_data21=(`delta:confirmed : ${con_json.TN.districts.Dharmapuri.delta.confirmed}`)
    document.querySelector(".p21").innerText=state_data21
    let state_data22=(`delta:recovered : ${con_json.TN.districts.Dharmapuri.delta.recovered}`)
    document.querySelector(".p22").innerText=state_data22
    let state_data23=(`delta-7:confirmed : ${con_json.TN.districts.Dharmapuri.delta7.confirmed}`)
    document.querySelector(".p23").innerText=state_data23
    let state_data24=(`delta-7:recovered : ${con_json.TN.districts.Dharmapuri.delta7.recovered}`)
    document.querySelector(".p24").innerText=state_data24
    let state_data25=(`delta-21_14:confirmed : ${con_json.TN.districts.Dharmapuri.delta21_14.confirmed}`)
    document.querySelector(".p25").innerText=state_data25
    let population5=(`population : ${con_json.TN.districts.Dharmapuri.meta.population}`)
    document.querySelector(".card-footers5").innerText=population5
    
    document.querySelector(".card-heads6").innerText="Dindigul"
    let state_data26=(`delta:confirmed : ${con_json.TN.districts.Dindigul.delta.confirmed}`)
    document.querySelector(".p26").innerText=state_data26
    let state_data27=(`delta:recovered : ${con_json.TN.districts.Dindigul.delta.recovered}`)
    document.querySelector(".p27").innerText=state_data27
    let state_data28=(`delta-7:confirmed : ${con_json.TN.districts.Dindigul.delta7.confirmed}`)
    document.querySelector(".p28").innerText=state_data28
    let state_data29=(`delta-7:recovered : ${con_json.TN.districts.Dindigul.delta7.recovered}`)
    document.querySelector(".p29").innerText=state_data29
    let state_data30=(`delta-21_14:confirmed : ${con_json.TN.districts.Dindigul.delta21_14.confirmed}`)
    document.querySelector(".p30").innerText=state_data30
    let population6=(`population : ${con_json.TN.districts.Dindigul.meta.population}`)
    document.querySelector(".card-footers6").innerText=population6
    
}
catch(e){
    console.log(e)
    console.log("this api not valid")
}
   
}
data()