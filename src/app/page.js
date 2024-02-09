"use client";

import { BsSearch} from 'react-icons/bs'
import {useRouter} from 'next/navigation'
import About from './components/about'
import Footer from './components/footer'

export default function Home() {


  const router = useRouter();
  function appendData(data) {
    var mainContainer = document.getElementById('contentpre');
    const tbl=document.createElement("table");
    const tblbody = document.createElement("tbody");
    const heads='["id","name","description","language","forks_count","visibility","stargazers_count"]';
    const arr=JSON.parse(heads);
    const tru=document.createElement("tr");
    for(var y=0;y<arr.length;y++){
        const thead=document.createElement("th");
        const celle=document.createTextNode(arr[y]);
        thead.appendChild(celle);
        tru.appendChild(thead);
    }
  
    tblbody.appendChild(tru);
    
    for(var k=0;k<data.length;k++){
        const row =document.createElement("tr");

        for(var j=0;j<arr.length;j++){
            const cell =document.createElement("td");
            //alert(data[k][arr[j]]);
            cell.innerHTML=data[k][arr[j]];
            row.appendChild(cell);
        }
        tblbody.appendChild(row);
    }
    tbl.appendChild(tblbody);
   
    mainContainer.appendChild(tbl);
  }
  function handleclick(){
    const valu=document.getElementById('namer').value;
    const url='https://api.github.com/users/'+valu+'/repos';
    fetch(url)
    .then(function(response)
    {
      return response.json();
    })
    .then(function (data) {  
      appendData(data);
    })
    .catch(function (err) {
      console.log(err);
    });
    document.getElementById('button').style.display="none";
  }
  function dd(){
    {/* function to calculate data from username */}
    const val=document.getElementById('namer').value;
    const x=val.replace(/^a-zA-Z]/g, '');
    const aa='https://komarev.com/ghpvc/?username='+val+'&label=Profile%20views&color=0e75b6&style=flat';
    if(val==''){
      const outbo='<img src=""><img>';
      document.getElementById('content').innerHTML=outbo;
    }
    else{
      {/*dynamic display of data here */}
    const outbox='<div style="text-align: center;padding-top:50px;"> Hi  </div><div style="text-align: center;"> You Are Currently viewing '+x+' Github Repository Info Page</div><div style="display: flex;align-items: center;justify-content: center;"><img style="text-align:center; padding:20px; padding-x:120px" src='+aa+'></img></div><div><div style="display: flex;align-items: center;justify-content: center;margin-bottom:50px;"><img src="https://github-profile-trophy.vercel.app/?username='+val+'" alt="'+val+'" /></div><div style="display: flex;align-items: center;justify-content: center;margin-bottom:50px;""><img src="https://github-readme-stats.vercel.app/api/top-langs?username='+val+'&show_icons=true&locale=en&layout=compact"></img></div><div style="display: flex;align-items: center;justify-content: center;margin-bottom:50px;"><img src="https://github-readme-stats.vercel.app/api?username='+val+'&show_icons=true&locale=en"></img></div><div style="display: flex;align-items: center;justify-content: center;margin-bottom:50px;"><img src="https://github-readme-streak-stats.herokuapp.com/?user='+val+'&"></img></div></div>';
    document.getElementById('content').innerHTML=outbox;

    }
  }
  return (

   
    <div className=''>
      
      <section className='my-[5rem] py-8 dark:bg-gray-800 '>
        
        <div className='mb-10 text-3xl px-3 justify-center text-center lg:py-8 text-blue-500 font-semibold lg:text-4xl'>
          Github Tracker
        </div>
        
        <div className='  flex px-5 h-16 mb-12 md:h-10 lg;h-10'>
           <input className='px-6 w-full bg-white  shadow-lg border-2 border-gray-400  rounded-l-full' placeholder='Enter Github Username' type='text' id='namer'/>
           <button onClick={dd} id='search' className=' bg-gradient-to-r from-cyan-700 to-blue-700 flex justify-center items-center shadow-lg rounded-r-full w-40 text-2xl'><BsSearch /></button>
        </div>

      </section>

      <div>
        <section className='dark:bg-gray-800' >
        <div id="content" className=' border-teal-200 flex shadow-blue-300 flex-col bg-BIX bg-cover bg-opacity-40 bg-center bg-fixed bg-no-repeat gap-10  w-full dark:text-white border-y-2 lg:text-2xl font-bold text-white text-center gl '>
          </div>
        </section>
      </div>

      <div>
  
      
      </div>
      <About/>
      <Footer/>
    </div>
   
    
    
  )
}
